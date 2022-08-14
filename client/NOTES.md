# Big5 Notes

## Fix regenerator runtime error

This error happened when trying to use an async function.

[From this Article](https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj)

- Install regenerator-runtime

        npm install --save regenerator-runtime

- Update webpack file

        entry: ["regenerator-runtime/runtime.js", "<your enter js file>"]

- at the top of the file that you're using async function

        import 'regenerator-runtime/runtime'

## axios.config

`https://big5-traits.herokuapp.com/`
