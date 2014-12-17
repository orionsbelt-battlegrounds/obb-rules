CLOVERAGE_VERSION='1.0.5-SNAPSHOT' lein cloverage -o cov --coveralls
curl -F 'json_file=@cov/coveralls.json' "https://coveralls.io/api/v1/jobs"
