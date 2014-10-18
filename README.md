# OBB Rules  [![Build Status](https://travis-ci.org/orionsbelt-battlegrounds/obb-rules.svg)](https://travis-ci.org/orionsbelt-battlegrounds/obb-rules)

Implementation of the [Orion's Belt BattleGrounds](https://github.com/orionsbelt-battlegrounds) battle engine in `clojure`. There's also a [REST/JSON](https://github.com/orionsbelt-battlegrounds/obb-rules-api) interface for this component.

![Board Example](https://raw.github.com/orionsbelt-battlegrounds/battle-engine-ai/master/doc/SampleBoard.jpeg)

The basic functionality is implemented. Deploy units, process turns using `:move`, `:rotate` and `:attack` actions. Special powers and bonus are not implemented yet.

## Installation

Add the following dependency to your `project.clj` file:

[![Clojars Project](http://clojars.org/obb-rules/latest-version.svg)](http://clojars.org/obb-rules)

## Usage

You can create a game with a given _stash_. A stash is the quantity of units available to deploy.

```clojure
(def stash (obb-rules.stash/create :rain 1 
                                   :crusader 2))
(def game (obb-rules.game/create stash)
;=> {:state :deploy, :stash {:p2 {:crusader 2, :rain 1}, :p1 {:crusader 2, :rain 1}}, :width 8, :height 8, :elements {}}
```

Or you can just create a game with a random stash.

```clojure
(obb-rules.game/random)
;=> {:state :deploy, :stash {:p2 {"toxic" 100, "anubis" 100, "heavy-seeker" 25, "nova" 25, "kamikaze" 50, "scarab" 50, "worm" 50, "crusader" 25}, :p1 {"toxic" 100, "anubis" 100, "heavy-seeker" 25, "nova" 25, "kamikaze" 50, "scarab" 50, "worm" 50, "crusader" 25}}, :width 8, :height 8, :elements {}}
```

Then, you can apply actions in a turn. 

```clojure
(obb-rules.turn/process game :p1 [:move [1 2] [2 3] quantity]
                                 [:rotate [2 3] :north]
                                 [:attack [2 3] [2 6]])
```

You'll get a result stating if the turn was successful and with the new board. There are several more working examples on the [unit tests](https://github.com/orionsbelt-battlegrounds/obb-rules/tree/master/test/obb_rules).
