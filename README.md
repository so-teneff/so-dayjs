# Testing [dayjs][dayjs] with jest

## answer to StackOverflow question
[How to mock dayjs chained methods][q]

### Result
```
yarn run v1.22.4
$ jest
 PASS  src/today.spec.js
  today
    ✓ should be called with a date (3 ms)
    ✓ should return consistent date (2 ms)
```

[dayjs]: https://www.npmjs.com/package/dayjs
[q]: https://stackoverflow.com/questions/62898345/how-to-mock-dayjs-chained-methods/62909265#62909265