const os = require('os');
const cluster = require('cluster');

if (cluster.isMaster) {
    const n_cpus = os.cpus().length;
    for (let i = 0; i < n_cpus; i++) {
        cluster.fork();
    }
} else {
    require('./server')
}