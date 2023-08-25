const leadsData = [
    {
        "email": "email1@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email2@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email3@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email4@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email5@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email6@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email7@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },    
    {
        "email": "email8@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email9@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email11@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email12@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email13@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email14@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "emai1l5@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email16@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "emai1l7@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },    
    {
        "email": "email18@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
    {
        "email": "email19@gmail.com",
        "service_name": "Company Registration",
        "date": "2022-12-27 10:09:20.430322",
    },
  ]



module.exports  = leadsData;

Leads.insertMany(leadsData)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})