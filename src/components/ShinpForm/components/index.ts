// import.meta.glob自动导入，但遇到top-level-await的问题
// 即便开启了build target通过编译，但应用白屏
// TODO

// const componentFiles = import.meta.glob('./*.tsx')
// const components: Record<string, Function> = {}

// async function buildComponents() {
//   for await (const key of Object.keys(componentFiles)) {
//     const componentName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
//     if (componentName === 'index') continue
//     const module = (await componentFiles[key]()) as { default: Function }
//     components[componentName] = module.default
//   }
// }

// buildComponents()

// export default Object.freeze(components)

import formInput from './formInput'
import formSelect from './formSelect'

const components: Record<string, (col: ShinpForm.ColProp, values: Record<string, any>) => JSX.Element> = {
  formInput,
  formSelect,
}

export default components
