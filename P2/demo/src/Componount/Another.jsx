import React from 'react'

const Another = () => {
    const Data = [{
        "first_name": "Cally",
        "last_name": "Lowdeane",
        "email": "clowdeane0@vistaprint.com",
        "Phone": "+86 124 323 1252"
    }, {
        "first_name": "Simonette",
        "last_name": "Railton",
        "email": "srailton1@webeden.co.uk",
        "Phone": "+62 781 247 3781"
    }, {
        "first_name": "Shannan",
        "last_name": "Klugel",
        "email": "sklugel2@latimes.com",
        "Phone": "+7 542 306 5955"
    }, {
        "first_name": "Vannie",
        "last_name": "Gealy",
        "email": "vgealy3@jugem.jp",
        "Phone": "+62 529 636 8056"
    }, {
        "first_name": "Dionisio",
        "last_name": "Gashion",
        "email": "dgashion6@mysql.com",
        "Phone": "+54 260 879 6353"
    }, {
        "first_name": "Erik",
        "last_name": "Harraway",
        "email": "eharraway7@statcounter.com",
        "Phone": "+62 377 394 3905"
    }, {
        "first_name": "Amara",
        "last_name": "Davenhall",
        "email": "adavenhall8@mozilla.com",
        "Phone": "+48 121 990 2788"
    }, {
        "first_name": "Alanah",
        "last_name": "Tookill",
        "email": "atookill9@etsy.com",
        "Phone": "+51 632 767 0515"
    }, {
        "first_name": "Justus",
        "last_name": "Lydster",
        "email": "jlydstera@vistaprint.com",
        "Phone": "+86 214 229 7729"
    }, {
        "first_name": "Herta",
        "last_name": "Lattimore",
        "email": "hlattimoreb@flickr.com",
        "Phone": "+258 290 464 2732"
    }, {
        "first_name": "Tiffy",
        "last_name": "Gypps",
        "email": "tgyppsc@macromedia.com",
        "Phone": "+86 633 376 1829"
    }, {
        "first_name": "Berti",
        "last_name": "Lambrecht",
        "email": "blambrechtd@paypal.com",
        "Phone": "+62 836 970 4856"
    }, {
        "first_name": "Gerda",
        "last_name": "Frear",
        "email": "gfreare@moonfruit.com",
        "Phone": "+81 368 248 0771"
    }]

    return (
        <>
            <table border="5">
                <thead>
                    <tr>
                        <td>first_name</td>
                        <td>last_name</td>
                        <td>email</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((item) => (
                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.Phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}

export default Another