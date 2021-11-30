let result;

export default async function handler(req, res) {
    if(!result){
    let response = await fetch('https://test.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9c1ghSpUbLl.Q12ObsgcWNlXL9WcfpR5zCD2z.0znnOq1HZuZ60IdjTpBJp5tiZOpww8xSle0N0Ze1VmV&client_secret=903528DF98F542729FCC4D2D5C9FD92DA05727670CAEDB522E007A83BAF61209&username=imcgovern@cine-med.net.cinemedsb&password=abc123!@%23%23', {
        method: 'POST'
    });
    result = await response.json()
    res.status(200).json(result.access_token);
    }
    else res.status(200).json(result.issued_at);

}