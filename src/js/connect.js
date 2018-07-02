driver = require('node-ssh');

    ssh = new driver({
              host: '10.0.0.20',
              username: 'sdytrych',
              privateKey : '/src/data/connect/id_rsa'
            });

    ssh.connect().then(function() {
           /*
       some code
        */

            },function(error) {
                console.log(error);

            });
