module.exports = function override(config, env) {
  
  config.resolve.modules = [...(config.resolve.modules || []), 'src']

  return config
}