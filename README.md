# OBB Rules
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/orionsbelt-battlegrounds/open-source?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Coverage Status](https://coveralls.io/repos/orionsbelt-battlegrounds/obb-rules/badge.png?branch=master)](https://coveralls.io/r/orionsbelt-battlegrounds/obb-rules?branch=master) [![Build Status](https://travis-ci.org/orionsbelt-battlegrounds/obb-rules.svg)](https://travis-ci.org/orionsbelt-battlegrounds/obb-rules) [![Dependency Status](https://www.versioneye.com/user/projects/54524ea830a8fe3fcb000004/badge.svg?style=flat)](https://www.versioneye.com/user/projects/54524ea830a8fe3fcb000004)

Implementation of the [Orion's Belt BattleGrounds](https://github.com/orionsbelt-battlegrounds) battle engine in `Clojure(Script)`.

![Board Example](https://raw.github.com/orionsbelt-battlegrounds/obb-rules/master/doc/BoardSample.png)

* [Game Overview](https://github.com/orionsbelt-battlegrounds/obb-rules#game-overview)
 * [Available Actions](https://github.com/orionsbelt-battlegrounds/obb-rules#available-actions)
 * [Unit Traits](https://github.com/orionsbelt-battlegrounds/obb-rules#unit-traits)
* [Instalation](https://github.com/orionsbelt-battlegrounds/obb-rules#installation)
* [Usage](https://github.com/orionsbelt-battlegrounds/obb-rules#usage)
 * [AI](https://github.com/orionsbelt-battlegrounds/obb-rules#ai)

### Game Overview

This is a chess-like board game, played on an 8x8 board. The player has up to 8 units to play and he starts by deploying them on the first 2 rows. This is unlike chess where you have all the pieces deployed in a standard way. After both players deploy their units, one is randomly choosen to draw first blood.

Also unlike chess, each player has **6 action points** to spend on his turn. Each unit has a movement cost and an attack cost. There are many [units](https://github.com/orionsbelt-battlegrounds/obb-rules/tree/master/src/obb_rules/units) and each one has it's own gameplay tactics.

#### Available Actions

When deploying or during the turn, there are the following actions available:

##### `[:deploy 10 :rain [8 8]]`

Places 10 `:rain` units on coord `[8 8]`. Only possible on the deploy phase.

##### `[:auto-deploy :firingsquad]`

Gathers all available units and deploys them using a template. On this example the `:firingsquad` template is being used. Mainly used by the AI.

##### `[:move [1 2] [2 3] 3]`

Moves `3` units on coord `[1 2]` to coord `[2 3]`. Coords must be adjacent. The movement takes action points, depending on the selected unit's movement cost. You can do a partial move, but it will cost double action points.

##### `[:goto [1 2] [4 4]]`

Moves all units on `[1 2]` to `[4 4]`. It tries to find a path using the unit's movement cost and movement type.

##### `[:rotate [2 3] :north]`

Rotates unit on coord `[2 3]` to `north`. It's possible to rotate to any direction and it takes 1 action point. Units can only attack to where they are faced.

##### `[:attack [2 3] [2 6]]`

Orders unit on coord `[2 3]` to attack unit on coord `[2 6]`. Takes 1 action point. They specified unit must have a `range` to reach the target unit.

#### Unit traits

All unit properties are defined on the [metadata files](https://github.com/orionsbelt-battlegrounds/obb-rules/tree/master/src/obb_rules/units). Units have several properties:
* Range
* Damage
* Health
* Bonus (damage and health bonus against specific categories)
* Movement type (`:normal`, `:front`, `:diagonal` and `:all`)
* Category (`:light`, `:medium` and `:heavy`)

Units may also have special powers:
* **Catapult**: may attack even if other units are on the way
* **Rebound**: when the target unit is destroyed, the remaining damage is given to the next unit in line
* **StrikeBack**: when a unit is damage, it will also damage it's attacker
* **TripleAttack**: when a unit attacks, it also damages units perpendicular to the target

These special powers can be mixed and matched and several units have one or more of them.

## Installation

Add the following dependency to your `project.clj` file:

[![Clojars Project](http://clojars.org/obb-rules/latest-version.svg)](http://clojars.org/obb-rules)

## Usage

You can create a game with a given _stash_ for each player. A stash is an
associative collection with the units and corresponding quantities to deploy.

```clojure
(def stash (obb-rules.stash/create :rain 1 
                                   :crusader 2))
(def game (obb-rules.game-progress/new-game {:p1 stash :p2 stash})
;=> {:state :deploy, :stash {:p2 {:crusader 2, :rain 1}, :p1 {:crusader 2, :rain 1}}, :width 8, :height 8, :elements {}}
```

Or you can just create a game with a random stash. In this case, the same random
stash is given to all players.

```clojure
(obb-rules.game-progress/new-random-game)
;=> {:state :deploy, :stash {:p2 {"toxic" 100, "anubis" 100, "heavy-seeker" 25, "nova" 25, "kamikaze" 50, "scarab" 50, "worm" 50, "crusader" 25}, :p1 {"toxic" 100, "anubis" 100, "heavy-seeker" 25, "nova" 25, "kamikaze" 50, "scarab" 50, "worm" 50, "crusader" 25}}, :width 8, :height 8, :elements {}}
```

Then, you can apply actions in a turn. 

```clojure
(obb-rules.turn/process game :p1 [:move [1 2] [2 3] quantity]
                                 [:rotate [2 3] :north]
                                 [:attack [2 3] [2 6]])
```

You'll get a result stating if the turn was successful and with the new board. There are several more working examples on the [unit tests](https://github.com/orionsbelt-battlegrounds/obb-rules/tree/master/test/obb_rules).

### AI

This lib includes a very simple AI implementation. There is one implementation named `:firingsquad` that tries to mimic tipical firing squad tactics. The bot API is very simple: You pass it a board and the player to process, and it returns actions to process. The [acts-as-a-bot-test](https://github.com/orionsbelt-battlegrounds/obb-rules/blob/master/test/obb_rules/ai/acts_as_bot_test.cljc) has several usage examples.
