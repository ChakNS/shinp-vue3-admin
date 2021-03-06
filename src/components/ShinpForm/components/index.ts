const componentFiles = import.meta.glob('./*.tsx')
const components: Record<string, Function> = {}

async function buildComponents() {
  for await (const key of Object.keys(componentFiles)) {
    const componentName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (componentName === 'index') continue
    const module = (await componentFiles[key]()) as { default: Function }
    components[componentName] = module.default
  }
}

buildComponents()

export default Object.freeze(components)
