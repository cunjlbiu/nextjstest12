
let ACCESSSTOKEN;

export default async function handler(req, res) {
    const {
        method
    } = req
    switch (method){
        case 'POST':
            if(!ACCESSSTOKEN){
                let response = await fetch('https://test.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9c1ghSpUbLl.Q12ObsgcWNlXL9WcfpR5zCD2z.0znnOq1HZuZ60IdjTpBJp5tiZOpww8xSle0N0Ze1VmV&client_secret=903528DF98F542729FCC4D2D5C9FD92DA05727670CAEDB522E007A83BAF61209&username=imcgovern@cine-med.net.cinemedsb&password=abc123!@%23%23', {
                    method: 'POST'
                });
                ACCESSSTOKEN = await response.json()

                res.status(200).json(req.body.party);
            }
            else {

                res.status(200).json(req.body.name);
            }
            break;
        case 'GET':
            res.status(200).json(ACCESSSTOKEN);
            break;
    }

}