module.exports = {
  error_file: 'err.log',
  out_file: 'out.log',
  log_file: 'combined.log',
  time: true,
  apps : [{
    name: 'ZenPresentation',
    script: './index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT: 8000,
      NODE_ENV: 'development'
    },
    env_production: {
      PORT : 8001,
      NODE_ENV: 'production'
    }
  }]
}
