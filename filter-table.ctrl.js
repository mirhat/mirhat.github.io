angular.module('FilterTableApp', [])
    .controller('FilterTableController', function ($scope) {
        $scope.users = {
            headers: [{
                name: 'Name',
                data: 'name',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Address',
                data: 'address',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Telephone',
                data: 'telephone',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Email',
                data: 'email',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Profession',
                data: 'profession',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration date',
                data: 'registrationDate',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Registration expiration',
                data: 'registrationExpiration',
                filter: {
                    type: 'text'
                }
            }, {
                name: 'Status',
                data: 'status',
                filter: {
                    type: 'list',
                    options: ['Pending', 'Accepted', 'Rejected']
                }
            }],
            data: [
                {
                    name: "Nehru Poole",
                    address: "6797 Non St.",
                    telephone: "1-433-552-3134",
                    email: "cursus.in@ligulaAliquam.org",
                    profession: "Scientist",
                    registrationDate: "10/08/2018",
                    registrationExpiration: "21/05/2020",
                    status: "Pending"
                },
                {
                    name: "Buckminster Butler",
                    address: "P.O. Box 668, 6127 Cubilia Avenue",
                    telephone: "1-831-580-7125",
                    email: "blandit@Praesent.net",
                    profession: "Scientist",
                    registrationDate: "24/11/2018",
                    registrationExpiration: "08/10/2019",
                    status: "Pending"
                },
                {
                    name: "Marsden Cole",
                    address: "P.O. Box 216, 2441 Nisl. St.",
                    telephone: "1-390-462-2544",
                    email: "Nulla@Donecestmauris.ca",
                    profession: "Scientist",
                    registrationDate: "31/05/2018",
                    registrationExpiration: "19/07/2020",
                    status: "Pending"
                },
                {
                    name: "Thomas Griffith",
                    address: "Ap #240-7558 Aliquet, Ave",
                    telephone: "622-2391",
                    email: "adipiscing.elit@dictumsapienAenean.net",
                    profession: "Scientist",
                    registrationDate: "25/06/2018",
                    registrationExpiration: "08/07/2020",
                    status: "Pending"
                },
                {
                    name: "Reuben Ross",
                    address: "8801 Pharetra Av.",
                    telephone: "886-5824",
                    email: "convallis.dolor@nequeMorbiquis.net",
                    profession: "Scientist",
                    registrationDate: "09/03/2017",
                    registrationExpiration: "29/05/2020",
                    status: "Pending"
                },
                {
                    name: "Keefe Barry",
                    address: "1921 Integer St.",
                    telephone: "650-3975",
                    email: "arcu@euismodindolor.net",
                    profession: "Scientist",
                    registrationDate: "28/06/2017",
                    registrationExpiration: "22/06/2020",
                    status: "Pending"
                },
                {
                    name: "Gage Miranda",
                    address: "9060 Lorem, Road",
                    telephone: "1-527-865-2709",
                    email: "feugiat@Morbi.co.uk",
                    profession: "Scientist",
                    registrationDate: "02/01/2018",
                    registrationExpiration: "21/01/2020",
                    status: "Pending"
                },
                {
                    name: "Scott Fry",
                    address: "7666 Scelerisque Rd.",
                    telephone: "838-7807",
                    email: "enim.consequat.purus@aliquamenim.org",
                    profession: "Scientist",
                    registrationDate: "01/05/2018",
                    registrationExpiration: "10/06/2020",
                    status: "Pending"
                },
                {
                    name: "Sawyer Frye",
                    address: "P.O. Box 835, 9253 Consequat St.",
                    telephone: "1-207-260-9254",
                    email: "enim.nisl.elementum@ipsum.org",
                    profession: "Scientist",
                    registrationDate: "12/02/2018",
                    registrationExpiration: "28/10/2020",
                    status: "Pending"
                },
                {
                    name: "Dieter Chan",
                    address: "787-1666 Metus. St.",
                    telephone: "514-3674",
                    email: "purus.Maecenas@in.co.uk",
                    profession: "Scientist",
                    registrationDate: "12/06/2017",
                    registrationExpiration: "29/05/2019",
                    status: "Pending"
                },
                {
                    name: "Stewart Vargas",
                    address: "486-6422 Dolor St.",
                    telephone: "1-342-689-6322",
                    email: "metus.In@gravidamolestie.net",
                    profession: "Scientist",
                    registrationDate: "22/04/2018",
                    registrationExpiration: "18/07/2019",
                    status: "Pending"
                },
                {
                    name: "Vernon Pierce",
                    address: "P.O. Box 262, 4042 Nascetur Road",
                    telephone: "1-803-410-6246",
                    email: "ornare@urna.ca",
                    profession: "Scientist",
                    registrationDate: "03/02/2018",
                    registrationExpiration: "25/05/2020",
                    status: "Pending"
                },
                {
                    name: "Benedict Keith",
                    address: "Ap #637-5246 Rutrum Ave",
                    telephone: "1-609-938-0304",
                    email: "convallis.in@luctuset.ca",
                    profession: "Programmer",
                    registrationDate: "16/11/2018",
                    registrationExpiration: "08/05/2019",
                    status: "Pending"
                },
                {
                    name: "Brent Gallegos",
                    address: "P.O. Box 809, 6204 Varius Rd.",
                    telephone: "678-3905",
                    email: "orci.quis@odioEtiamligula.org",
                    profession: "Doctor",
                    registrationDate: "08/10/2018",
                    registrationExpiration: "18/12/2020",
                    status: "Rejected"
                },
                {
                    name: "Kenyon Lang",
                    address: "Ap #624-2265 Sed Ave",
                    telephone: "140-0714",
                    email: "ligula@mieleifend.ca",
                    profession: "Scientist",
                    registrationDate: "28/11/2017",
                    registrationExpiration: "17/10/2020",
                    status: "Pending"
                },
                {
                    name: "Brandon Graham",
                    address: "P.O. Box 223, 7488 Adipiscing Road",
                    telephone: "441-4216",
                    email: "Aliquam@nequenonquam.co.uk",
                    profession: "Scientist",
                    registrationDate: "03/06/2018",
                    registrationExpiration: "18/08/2019",
                    status: "Rejected"
                },
                {
                    name: "Griffin Burch",
                    address: "Ap #527-5322 Neque Road",
                    telephone: "1-738-649-2014",
                    email: "diam@eros.net",
                    profession: "Scientist",
                    registrationDate: "14/09/2018",
                    registrationExpiration: "22/10/2019",
                    status: "Pending"
                },
                {
                    name: "Macaulay Stark",
                    address: "Ap #277-6454 Sem Rd.",
                    telephone: "197-5658",
                    email: "feugiat.non@antedictummi.org",
                    profession: "Scientist",
                    registrationDate: "12/11/2018",
                    registrationExpiration: "23/06/2019",
                    status: "Pending"
                },
                {
                    name: "Christian Stanley",
                    address: "Ap #918-8215 Dolor. Rd.",
                    telephone: "1-422-232-0398",
                    email: "mauris@tempusrisusDonec.net",
                    profession: "Scientist",
                    registrationDate: "10/04/2017",
                    registrationExpiration: "05/02/2019",
                    status: "Rejected"
                },
                {
                    name: "Chancellor Ashley",
                    address: "P.O. Box 166, 2210 Diam Rd.",
                    telephone: "171-7853",
                    email: "Cras.eu.tellus@iaculis.co.uk",
                    profession: "Scientist",
                    registrationDate: "02/06/2017",
                    registrationExpiration: "07/09/2019",
                    status: "Rejected"
                },
                {
                    name: "Gage Huber",
                    address: "3010 Ac Avenue",
                    telephone: "1-295-105-5190",
                    email: "nulla.Cras@Aeneaneuismod.com",
                    profession: "Scientist",
                    registrationDate: "17/09/2017",
                    registrationExpiration: "09/02/2020",
                    status: "Pending"
                },
                {
                    name: "Arsenio Maldonado",
                    address: "7916 Scelerisque Ave",
                    telephone: "966-0453",
                    email: "Phasellus@ac.net",
                    profession: "Scientist",
                    registrationDate: "13/11/2018",
                    registrationExpiration: "04/01/2020",
                    status: "Pending"
                },
                {
                    name: "Byron English",
                    address: "443-8534 Pellentesque Av.",
                    telephone: "1-280-953-0620",
                    email: "enim@Morbinon.ca",
                    profession: "Scientist",
                    registrationDate: "13/09/2017",
                    registrationExpiration: "30/03/2020",
                    status: "Pending"
                },
                {
                    name: "Jason Ford",
                    address: "7119 Ac, Ave",
                    telephone: "1-152-487-3330",
                    email: "elementum@maurisanunc.org",
                    profession: "Scientist",
                    registrationDate: "26/11/2017",
                    registrationExpiration: "20/04/2020",
                    status: "Pending"
                },
                {
                    name: "Clark Kane",
                    address: "759-2484 Lacus. Street",
                    telephone: "1-494-189-5779",
                    email: "tristique.pellentesque.tellus@fermentum.net",
                    profession: "Scientist",
                    registrationDate: "09/09/2018",
                    registrationExpiration: "15/12/2020",
                    status: "Pending"
                },
                {
                    name: "Jelani Sheppard",
                    address: "Ap #794-3902 Consequat Road",
                    telephone: "1-131-535-0483",
                    email: "orci.in@odiovel.co.uk",
                    profession: "Scientist",
                    registrationDate: "04/03/2017",
                    registrationExpiration: "02/11/2020",
                    status: "Pending"
                },
                {
                    name: "Jerry Marks",
                    address: "185-6629 Interdum. Rd.",
                    telephone: "993-8963",
                    email: "sit@pretiumneque.net",
                    profession: "Scientist",
                    registrationDate: "22/11/2018",
                    registrationExpiration: "10/09/2019",
                    status: "Pending"
                },
                {
                    name: "Charles Carpenter",
                    address: "289-3691 Purus Rd.",
                    telephone: "243-4901",
                    email: "rutrum@Nullasempertellus.org",
                    profession: "Scientist",
                    registrationDate: "12/01/2017",
                    registrationExpiration: "17/08/2020",
                    status: "Pending"
                },
                {
                    name: "Adrian Becker",
                    address: "P.O. Box 354, 5075 Nunc. Street",
                    telephone: "1-371-673-6930",
                    email: "sem@Nuncullamcorpervelit.com",
                    profession: "Scientist",
                    registrationDate: "28/12/2018",
                    registrationExpiration: "29/06/2019",
                    status: "Accepted"
                },
                {
                    name: "Grant Burris",
                    address: "901-9266 Primis Road",
                    telephone: "414-6018",
                    email: "mauris.a.nunc@Fuscemollis.co.uk",
                    profession: "Scientist",
                    registrationDate: "08/09/2018",
                    registrationExpiration: "16/05/2019",
                    status: "Pending"
                },
                {
                    name: "Peter Cardenas",
                    address: "739-327 Egestas, St.",
                    telephone: "518-5501",
                    email: "ac.fermentum@anteiaculisnec.net",
                    profession: "Scientist",
                    registrationDate: "17/02/2018",
                    registrationExpiration: "03/07/2019",
                    status: "Pending"
                },
                {
                    name: "Linus Pearson",
                    address: "716-8217 Nec, Rd.",
                    telephone: "1-257-277-6104",
                    email: "sem.magna@iaculisquis.com",
                    profession: "Scientist",
                    registrationDate: "04/02/2017",
                    registrationExpiration: "07/08/2019",
                    status: "Accepted"
                },
                {
                    name: "Griffith West",
                    address: "P.O. Box 595, 5022 Turpis Street",
                    telephone: "232-4077",
                    email: "erat.eget@elitpedemalesuada.co.uk",
                    profession: "Scientist",
                    registrationDate: "14/08/2017",
                    registrationExpiration: "04/05/2020",
                    status: "Pending"
                },
                {
                    name: "Maxwell Albert",
                    address: "5494 Nulla Av.",
                    telephone: "1-747-674-2395",
                    email: "Praesent.eu@nibhlacinia.co.uk",
                    profession: "Scientist",
                    registrationDate: "23/04/2018",
                    registrationExpiration: "22/11/2019",
                    status: "Pending"
                },
                {
                    name: "Zachary Jordan",
                    address: "P.O. Box 468, 835 Tristique Avenue",
                    telephone: "373-0490",
                    email: "et.arcu@semperegestasurna.org",
                    profession: "Scientist",
                    registrationDate: "01/10/2018",
                    registrationExpiration: "28/07/2020",
                    status: "Accepted"
                },
                {
                    name: "Ferris Carter",
                    address: "Ap #418-1452 Eu Rd.",
                    telephone: "809-0014",
                    email: "mauris.eu@atarcu.com",
                    profession: "Scientist",
                    registrationDate: "24/09/2018",
                    registrationExpiration: "02/08/2019",
                    status: "Pending"
                },
                {
                    name: "Carson Mcconnell",
                    address: "Ap #357-2279 Sed Rd.",
                    telephone: "1-314-113-9492",
                    email: "sociis@luctusCurabitur.co.uk",
                    profession: "Scientist",
                    registrationDate: "03/07/2017",
                    registrationExpiration: "02/07/2019",
                    status: "Pending"
                },
                {
                    name: "Hunter Dickerson",
                    address: "P.O. Box 684, 4456 Morbi Rd.",
                    telephone: "662-4048",
                    email: "dignissim.magna@ametconsectetuer.edu",
                    profession: "Scientist",
                    registrationDate: "09/11/2017",
                    registrationExpiration: "12/09/2019",
                    status: "Pending"
                },
                {
                    name: "Jonah Gill",
                    address: "681-9722 Nostra, Road",
                    telephone: "386-4586",
                    email: "neque.vitae@sapienNunc.org",
                    profession: "Scientist",
                    registrationDate: "26/09/2017",
                    registrationExpiration: "26/07/2019",
                    status: "Accepted"
                },
                {
                    name: "Herman Hendricks",
                    address: "P.O. Box 542, 5840 Accumsan Avenue",
                    telephone: "1-337-714-1844",
                    email: "montes.nascetur.ridiculus@ornarelectusante.co.uk",
                    profession: "Scientist",
                    registrationDate: "05/12/2018",
                    registrationExpiration: "27/02/2019",
                    status: "Pending"
                },
                {
                    name: "Baxter Sawyer",
                    address: "7235 Posuere St.",
                    telephone: "1-390-720-3326",
                    email: "hymenaeos@Donec.co.uk",
                    profession: "Scientist",
                    registrationDate: "17/01/2018",
                    registrationExpiration: "15/05/2020",
                    status: "Pending"
                },
                {
                    name: "Wesley Ramos",
                    address: "P.O. Box 663, 7902 Ut Rd.",
                    telephone: "1-705-582-5429",
                    email: "est@dui.org",
                    profession: "Scientist",
                    registrationDate: "08/08/2017",
                    registrationExpiration: "27/05/2020",
                    status: "Rejected"
                },
                {
                    name: "Hasad Bolton",
                    address: "P.O. Box 671, 4193 Ipsum St.",
                    telephone: "1-517-638-0435",
                    email: "a@semperet.net",
                    profession: "Scientist",
                    registrationDate: "26/08/2017",
                    registrationExpiration: "21/10/2019",
                    status: "Pending"
                },
                {
                    name: "Hiram Morin",
                    address: "P.O. Box 511, 2341 Accumsan St.",
                    telephone: "1-878-364-5308",
                    email: "Nunc.ac@est.edu",
                    profession: "Scientist",
                    registrationDate: "25/01/2018",
                    registrationExpiration: "21/10/2020",
                    status: "Rejected"
                },
                {
                    name: "Chaim Todd",
                    address: "Ap #103-4941 Nunc. Avenue",
                    telephone: "1-668-158-8631",
                    email: "elit@ametconsectetueradipiscing.org",
                    profession: "Scientist",
                    registrationDate: "23/01/2018",
                    registrationExpiration: "11/08/2020",
                    status: "Rejected"
                },
                {
                    name: "Alan Moon",
                    address: "302-5616 Pellentesque St.",
                    telephone: "411-4393",
                    email: "velit.in@necmollisvitae.net",
                    profession: "Scientist",
                    registrationDate: "20/12/2017",
                    registrationExpiration: "08/06/2020",
                    status: "Pending"
                },
                {
                    name: "Plato Holmes",
                    address: "P.O. Box 618, 6242 Dictum Rd.",
                    telephone: "838-4674",
                    email: "tempor.erat@amet.ca",
                    profession: "Scientist",
                    registrationDate: "06/10/2018",
                    registrationExpiration: "12/05/2019",
                    status: "Pending"
                },
                {
                    name: "Ignatius Gonzalez",
                    address: "600-2480 Lacinia. Rd.",
                    telephone: "1-554-295-7945",
                    email: "nisi.sem.semper@congueelitsed.net",
                    profession: "Scientist",
                    registrationDate: "31/07/2018",
                    registrationExpiration: "06/09/2020",
                    status: "Rejected"
                },
                {
                    name: "Graiden Cervantes",
                    address: "Ap #559-203 Sit Av.",
                    telephone: "1-298-169-1203",
                    email: "ut@tristiquesenectuset.co.uk",
                    profession: "Scientist",
                    registrationDate: "16/08/2017",
                    registrationExpiration: "06/01/2019",
                    status: "Pending"
                },
                {
                    name: "Baxter Knight",
                    address: "521-3963 Duis Rd.",
                    telephone: "831-9129",
                    email: "posuere@convallis.edu",
                    profession: "Scientist",
                    registrationDate: "10/08/2018",
                    registrationExpiration: "03/06/2020",
                    status: "Pending"
                },
                {
                    name: "Rahim Grant",
                    address: "P.O. Box 159, 8545 Vestibulum Rd.",
                    telephone: "678-9267",
                    email: "In.condimentum.Donec@lacusQuisque.co.uk",
                    profession: "Scientist",
                    registrationDate: "21/01/2017",
                    registrationExpiration: "31/05/2020",
                    status: "Pending"
                },
                {
                    name: "Drake Small",
                    address: "Ap #964-4852 Integer St.",
                    telephone: "1-271-638-7939",
                    email: "nulla.In@sociosquadlitora.co.uk",
                    profession: "Scientist",
                    registrationDate: "26/06/2018",
                    registrationExpiration: "04/01/2019",
                    status: "Pending"
                },
                {
                    name: "Elijah Campos",
                    address: "966 Pede, Rd.",
                    telephone: "713-5063",
                    email: "Duis.mi.enim@luctus.com",
                    profession: "Scientist",
                    registrationDate: "06/02/2018",
                    registrationExpiration: "22/07/2019",
                    status: "Pending"
                },
                {
                    name: "Burton Cobb",
                    address: "674 Ac Rd.",
                    telephone: "241-2192",
                    email: "eleifend.egestas.Sed@anteipsum.net",
                    profession: "Scientist",
                    registrationDate: "08/06/2018",
                    registrationExpiration: "26/12/2020",
                    status: "Pending"
                },
                {
                    name: "Raja Roman",
                    address: "P.O. Box 972, 4663 Auctor. St.",
                    telephone: "1-706-664-7199",
                    email: "velit@laoreetposuereenim.ca",
                    profession: "Scientist",
                    registrationDate: "02/06/2017",
                    registrationExpiration: "10/03/2019",
                    status: "Pending"
                },
                {
                    name: "Drake Carpenter",
                    address: "Ap #212-4295 Scelerisque, Rd.",
                    telephone: "1-344-861-4127",
                    email: "justo.eu@Vivamuseuismodurna.org",
                    profession: "Scientist",
                    registrationDate: "07/07/2018",
                    registrationExpiration: "21/10/2020",
                    status: "Pending"
                },
                {
                    name: "Jerry Haley",
                    address: "Ap #457-5191 Fermentum Street",
                    telephone: "448-8090",
                    email: "eleifend@Curabitur.ca",
                    profession: "Scientist",
                    registrationDate: "12/04/2017",
                    registrationExpiration: "08/10/2019",
                    status: "Pending"
                },
                {
                    name: "Daniel Hyde",
                    address: "Ap #278-5242 Ac Av.",
                    telephone: "988-6373",
                    email: "penatibus@ipsum.net",
                    profession: "Scientist",
                    registrationDate: "12/09/2017",
                    registrationExpiration: "17/04/2019",
                    status: "Pending"
                },
                {
                    name: "Channing Lindsey",
                    address: "688-5931 Tortor. Rd.",
                    telephone: "1-289-925-5207",
                    email: "lorem.lorem.luctus@inaliquetlobortis.net",
                    profession: "Scientist",
                    registrationDate: "17/05/2017",
                    registrationExpiration: "26/12/2020",
                    status: "Pending"
                },
                {
                    name: "Oscar Hanson",
                    address: "915-1912 Lobortis Rd.",
                    telephone: "1-374-151-1802",
                    email: "sem@eu.com",
                    profession: "Scientist",
                    registrationDate: "27/05/2017",
                    registrationExpiration: "24/01/2020",
                    status: "Pending"
                },
                {
                    name: "Benedict Watson",
                    address: "633-2759 Ante Av.",
                    telephone: "1-126-535-9369",
                    email: "vehicula.et.rutrum@mifringilla.org",
                    profession: "Scientist",
                    registrationDate: "16/02/2018",
                    registrationExpiration: "06/10/2019",
                    status: "Pending"
                },
                {
                    name: "Clark Whitley",
                    address: "181-742 Eget St.",
                    telephone: "1-837-329-7628",
                    email: "erat@Phasellusvitaemauris.ca",
                    profession: "Scientist",
                    registrationDate: "17/11/2018",
                    registrationExpiration: "05/05/2019",
                    status: "Pending"
                },
                {
                    name: "Bernard Peck",
                    address: "P.O. Box 738, 7447 Ultrices St.",
                    telephone: "467-4481",
                    email: "urna@sodalesMauris.co.uk",
                    profession: "Scientist",
                    registrationDate: "07/08/2017",
                    registrationExpiration: "04/07/2019",
                    status: "Pending"
                },
                {
                    name: "Price Ashley",
                    address: "P.O. Box 855, 251 Nulla Av.",
                    telephone: "553-4457",
                    email: "arcu.Nunc.mauris@orciUtsagittis.com",
                    profession: "Scientist",
                    registrationDate: "24/09/2017",
                    registrationExpiration: "07/10/2020",
                    status: "Pending"
                },
                {
                    name: "Anthony Reilly",
                    address: "Ap #764-5511 Aliquam St.",
                    telephone: "1-434-746-0253",
                    email: "Maecenas.ornare.egestas@interdum.com",
                    profession: "Scientist",
                    registrationDate: "20/11/2018",
                    registrationExpiration: "21/07/2020",
                    status: "Pending"
                },
                {
                    name: "Chase Blankenship",
                    address: "Ap #716-9742 Tellus. Rd.",
                    telephone: "668-4341",
                    email: "tellus.sem@pede.org",
                    profession: "Scientist",
                    registrationDate: "31/08/2018",
                    registrationExpiration: "23/08/2020",
                    status: "Pending"
                },
                {
                    name: "Lionel Perkins",
                    address: "366-9508 Eleifend Street",
                    telephone: "181-6826",
                    email: "arcu@urnaUt.net",
                    profession: "Scientist",
                    registrationDate: "29/09/2018",
                    registrationExpiration: "01/10/2019",
                    status: "Pending"
                },
                {
                    name: "Kamal Love",
                    address: "Ap #956-8166 Volutpat Avenue",
                    telephone: "837-6215",
                    email: "penatibus.et.magnis@elitelit.edu",
                    profession: "Scientist",
                    registrationDate: "30/09/2017",
                    registrationExpiration: "17/06/2020",
                    status: "Pending"
                },
                {
                    name: "Carson Lara",
                    address: "128-5828 Eu Street",
                    telephone: "1-884-467-0512",
                    email: "Sed.nunc@Integer.net",
                    profession: "Scientist",
                    registrationDate: "26/05/2018",
                    registrationExpiration: "11/10/2020",
                    status: "Pending"
                },
                {
                    name: "Thomas Clay",
                    address: "596-7083 Pellentesque Rd.",
                    telephone: "1-249-638-7722",
                    email: "eu.tellus@sitametnulla.ca",
                    profession: "Scientist",
                    registrationDate: "31/05/2017",
                    registrationExpiration: "26/03/2020",
                    status: "Pending"
                },
                {
                    name: "Daquan Buckner",
                    address: "442-6264 Cubilia Rd.",
                    telephone: "1-229-230-1052",
                    email: "dictum@Phasellusvitaemauris.co.uk",
                    profession: "Scientist",
                    registrationDate: "08/12/2018",
                    registrationExpiration: "15/03/2019",
                    status: "Pending"
                },
                {
                    name: "Joel Burke",
                    address: "5153 Nisl Rd.",
                    telephone: "1-279-504-4736",
                    email: "odio.vel@pharetranibhAliquam.com",
                    profession: "Scientist",
                    registrationDate: "04/10/2017",
                    registrationExpiration: "23/04/2019",
                    status: "Pending"
                },
                {
                    name: "Benjamin Gould",
                    address: "6643 At Rd.",
                    telephone: "423-2378",
                    email: "id.magna@metus.ca",
                    profession: "Scientist",
                    registrationDate: "23/09/2018",
                    registrationExpiration: "04/01/2019",
                    status: "Pending"
                },
                {
                    name: "Quinlan Horne",
                    address: "P.O. Box 334, 9887 Velit St.",
                    telephone: "1-771-700-3162",
                    email: "elit.sed@lacinia.edu",
                    profession: "Scientist",
                    registrationDate: "06/04/2017",
                    registrationExpiration: "02/06/2020",
                    status: "Pending"
                },
                {
                    name: "Nero Farmer",
                    address: "P.O. Box 508, 1694 Elit. Street",
                    telephone: "648-3113",
                    email: "dictum.eu@risusDuisa.edu",
                    profession: "Scientist",
                    registrationDate: "25/01/2017",
                    registrationExpiration: "25/05/2020",
                    status: "Pending"
                },
                {
                    name: "Alvin Mcfarland",
                    address: "Ap #117-1348 Ut, Rd.",
                    telephone: "1-178-281-3819",
                    email: "Proin.vel.arcu@risus.org",
                    profession: "Scientist",
                    registrationDate: "07/05/2018",
                    registrationExpiration: "30/03/2020",
                    status: "Pending"
                },
                {
                    name: "Robert Pruitt",
                    address: "P.O. Box 874, 6883 Fermentum Rd.",
                    telephone: "1-274-760-4483",
                    email: "Aenean.gravida@orci.co.uk",
                    profession: "Scientist",
                    registrationDate: "29/12/2017",
                    registrationExpiration: "04/10/2019",
                    status: "Pending"
                },
                {
                    name: "Walker Odonnell",
                    address: "5953 Primis Rd.",
                    telephone: "784-6418",
                    email: "nec.imperdiet@viverra.edu",
                    profession: "Scientist",
                    registrationDate: "08/07/2018",
                    registrationExpiration: "28/10/2019",
                    status: "Pending"
                },
                {
                    name: "Keith Bird",
                    address: "756-5427 Laoreet Av.",
                    telephone: "418-8648",
                    email: "Etiam.ligula.tortor@Integertincidunt.co.uk",
                    profession: "Scientist",
                    registrationDate: "01/10/2017",
                    registrationExpiration: "23/12/2019",
                    status: "Pending"
                },
                {
                    name: "Bert Bird",
                    address: "5722 Praesent Ave",
                    telephone: "1-124-793-4025",
                    email: "id.nunc@suscipitestac.net",
                    profession: "Scientist",
                    registrationDate: "29/04/2018",
                    registrationExpiration: "25/07/2020",
                    status: "Pending"
                },
                {
                    name: "Ashton Peters",
                    address: "984-8078 Lectus Avenue",
                    telephone: "424-2805",
                    email: "urna@iaculis.co.uk",
                    profession: "Scientist",
                    registrationDate: "16/05/2017",
                    registrationExpiration: "04/10/2020",
                    status: "Pending"
                },
                {
                    name: "Yardley Chapman",
                    address: "P.O. Box 672, 716 Sit Street",
                    telephone: "1-265-527-9770",
                    email: "mus@acfeugiatnon.com",
                    profession: "Scientist",
                    registrationDate: "14/03/2017",
                    registrationExpiration: "18/02/2020",
                    status: "Pending"
                },
                {
                    name: "Ashton Warren",
                    address: "9431 Dui, Road",
                    telephone: "1-610-815-4827",
                    email: "arcu.imperdiet.ullamcorper@nequeIn.ca",
                    profession: "Scientist",
                    registrationDate: "29/07/2018",
                    registrationExpiration: "03/02/2020",
                    status: "Pending"
                },
                {
                    name: "Lev Trujillo",
                    address: "P.O. Box 761, 9567 Dui Rd.",
                    telephone: "1-862-948-8629",
                    email: "commodo@Donecnonjusto.ca",
                    profession: "Scientist",
                    registrationDate: "17/02/2018",
                    registrationExpiration: "29/03/2019",
                    status: "Pending"
                },
                {
                    name: "Ferris Montgomery",
                    address: "4793 Lectus St.",
                    telephone: "1-766-658-6730",
                    email: "arcu@Donec.edu",
                    profession: "Scientist",
                    registrationDate: "28/08/2018",
                    registrationExpiration: "17/02/2020",
                    status: "Pending"
                },
                {
                    name: "Phillip Dixon",
                    address: "P.O. Box 657, 4465 Dis Rd.",
                    telephone: "794-7401",
                    email: "orci.Ut@egestas.edu",
                    profession: "Scientist",
                    registrationDate: "28/06/2017",
                    registrationExpiration: "01/05/2020",
                    status: "Pending"
                },
                {
                    name: "Gannon Merrill",
                    address: "825-5539 Est. Avenue",
                    telephone: "916-1483",
                    email: "egestas.blandit@parturient.ca",
                    profession: "Scientist",
                    registrationDate: "01/11/2018",
                    registrationExpiration: "27/01/2019",
                    status: "Pending"
                },
                {
                    name: "Harper Frye",
                    address: "P.O. Box 449, 8193 Integer Av.",
                    telephone: "1-606-932-1668",
                    email: "consectetuer.cursus.et@mauriseuelit.org",
                    profession: "Scientist",
                    registrationDate: "06/09/2017",
                    registrationExpiration: "24/11/2020",
                    status: "Pending"
                },
                {
                    name: "Isaiah Franks",
                    address: "P.O. Box 607, 8097 Eros St.",
                    telephone: "214-4237",
                    email: "diam.dictum@fermentum.co.uk",
                    profession: "Scientist",
                    registrationDate: "30/08/2018",
                    registrationExpiration: "30/11/2019",
                    status: "Pending"
                },
                {
                    name: "Francis Potter",
                    address: "492-4340 Massa. Av.",
                    telephone: "1-721-642-9822",
                    email: "a@dictumeuplacerat.com",
                    profession: "Scientist",
                    registrationDate: "30/01/2018",
                    registrationExpiration: "30/05/2020",
                    status: "Pending"
                },
                {
                    name: "Xavier Stein",
                    address: "P.O. Box 773, 1204 Semper Road",
                    telephone: "1-676-427-9080",
                    email: "Class.aptent@magna.co.uk",
                    profession: "Scientist",
                    registrationDate: "20/05/2017",
                    registrationExpiration: "26/09/2019",
                    status: "Pending"
                },
                {
                    name: "Austin Sandoval",
                    address: "P.O. Box 154, 9162 Auctor Road",
                    telephone: "1-383-465-5059",
                    email: "ut.odio@Duis.edu",
                    profession: "Scientist",
                    registrationDate: "15/06/2018",
                    registrationExpiration: "09/01/2020",
                    status: "Pending"
                },
                {
                    name: "Nasim Carr",
                    address: "8374 Aliquam Road",
                    telephone: "1-442-685-5109",
                    email: "enim.gravida@eleifendCrassed.ca",
                    profession: "Scientist",
                    registrationDate: "25/06/2017",
                    registrationExpiration: "26/04/2019",
                    status: "Pending"
                },
                {
                    name: "Kenneth Mckay",
                    address: "P.O. Box 939, 8781 Nunc. Road",
                    telephone: "1-383-108-4802",
                    email: "dis.parturient.montes@apurus.co.uk",
                    profession: "Scientist",
                    registrationDate: "26/03/2018",
                    registrationExpiration: "14/11/2020",
                    status: "Pending"
                },
                {
                    name: "Grady Baker",
                    address: "252-7914 Aliquet Rd.",
                    telephone: "677-0116",
                    email: "adipiscing.elit@ornareIn.net",
                    profession: "Scientist",
                    registrationDate: "11/06/2018",
                    registrationExpiration: "14/05/2020",
                    status: "Pending"
                },
                {
                    name: "Garrison Alexander",
                    address: "670-3994 Ultricies Ave",
                    telephone: "1-207-831-0671",
                    email: "lacus.Aliquam@cursusluctus.co.uk",
                    profession: "Scientist",
                    registrationDate: "09/06/2017",
                    registrationExpiration: "22/06/2019",
                    status: "Pending"
                },
                {
                    name: "Abel Emerson",
                    address: "Ap #246-2488 Tempor, St.",
                    telephone: "1-644-374-0502",
                    email: "ac.sem@quistristique.ca",
                    profession: "Scientist",
                    registrationDate: "10/07/2018",
                    registrationExpiration: "12/12/2019",
                    status: "Pending"
                },
                {
                    name: "Grady Kelley",
                    address: "P.O. Box 339, 7500 Eros Street",
                    telephone: "836-2481",
                    email: "pharetra.ut@aliquetsemut.co.uk",
                    profession: "Scientist",
                    registrationDate: "01/06/2017",
                    registrationExpiration: "25/05/2019",
                    status: "Pending"
                },
                {
                    name: "Beck Pitts",
                    address: "5143 Nulla. Ave",
                    telephone: "773-8962",
                    email: "sollicitudin@metusurna.org",
                    profession: "Scientist",
                    registrationDate: "10/02/2018",
                    registrationExpiration: "03/11/2020",
                    status: "Pending"
                },
                {
                    name: "Kenyon Mcguire",
                    address: "5816 Orci Avenue",
                    telephone: "1-254-944-7841",
                    email: "ipsum@non.co.uk",
                    profession: "Scientist",
                    registrationDate: "18/05/2017",
                    registrationExpiration: "15/11/2020",
                    status: "Pending"
                },
                {
                    name: "Damian Hill",
                    address: "Ap #646-9009 Lobortis, Av.",
                    telephone: "150-3197",
                    email: "scelerisque.scelerisque.dui@ornareelitelit.ca",
                    profession: "Scientist",
                    registrationDate: "17/08/2018",
                    registrationExpiration: "23/08/2019",
                    status: "Pending"
                },
                {
                    name: "Xander Franklin",
                    address: "669-1460 Aliquet St.",
                    telephone: "1-479-742-5256",
                    email: "tristique.pharetra@disparturient.net",
                    profession: "Scientist",
                    registrationDate: "12/04/2018",
                    registrationExpiration: "05/10/2019",
                    status: "Pending"
                },
                {
                    name: "Clinton Cleveland",
                    address: "P.O. Box 531, 2695 Nisl. Street",
                    telephone: "517-4486",
                    email: "posuere@enimnectempus.edu",
                    profession: "Scientist",
                    registrationDate: "12/06/2017",
                    registrationExpiration: "03/11/2019",
                    status: "Pending"
                },
                {
                    name: "Quamar Dominguez",
                    address: "5804 Sapien. St.",
                    telephone: "292-2538",
                    email: "sit.amet@rutrummagnaCras.edu",
                    profession: "Scientist",
                    registrationDate: "11/09/2018",
                    registrationExpiration: "15/12/2020",
                    status: "Pending"
                },
                {
                    name: "Garrison Roberson",
                    address: "Ap #701-8136 Malesuada Rd.",
                    telephone: "1-827-411-2541",
                    email: "sit.amet.orci@Utsagittislobortis.edu",
                    profession: "Scientist",
                    registrationDate: "25/11/2018",
                    registrationExpiration: "13/07/2020",
                    status: "Pending"
                },
                {
                    name: "Baxter Dyer",
                    address: "P.O. Box 276, 8183 Euismod Av.",
                    telephone: "902-9891",
                    email: "dapibus.gravida@orcisemeget.edu",
                    profession: "Scientist",
                    registrationDate: "02/11/2018",
                    registrationExpiration: "04/09/2019",
                    status: "Pending"
                },
                {
                    name: "Hasad Bishop",
                    address: "1552 Pellentesque, St.",
                    telephone: "1-268-178-0645",
                    email: "Vestibulum.accumsan@eliteratvitae.org",
                    profession: "Scientist",
                    registrationDate: "06/03/2017",
                    registrationExpiration: "02/06/2020",
                    status: "Pending"
                },
                {
                    name: "Kibo Patterson",
                    address: "P.O. Box 363, 1091 Elit, Av.",
                    telephone: "1-917-520-5032",
                    email: "eget.volutpat.ornare@Maurisut.ca",
                    profession: "Scientist",
                    registrationDate: "05/04/2017",
                    registrationExpiration: "09/12/2020",
                    status: "Pending"
                },
                {
                    name: "Bruno Hancock",
                    address: "P.O. Box 656, 4955 Nullam Rd.",
                    telephone: "683-0997",
                    email: "ac.risus@Namtempor.ca",
                    profession: "Scientist",
                    registrationDate: "21/10/2018",
                    registrationExpiration: "17/05/2019",
                    status: "Pending"
                },
                {
                    name: "Callum Rosales",
                    address: "3735 Sagittis. Rd.",
                    telephone: "1-309-900-8002",
                    email: "accumsan.neque@cursus.co.uk",
                    profession: "Scientist",
                    registrationDate: "14/07/2017",
                    registrationExpiration: "04/01/2019",
                    status: "Pending"
                },
                {
                    name: "Thane Vance",
                    address: "8095 Nisi St.",
                    telephone: "181-8466",
                    email: "porta.elit@nisimagna.org",
                    profession: "Scientist",
                    registrationDate: "13/04/2017",
                    registrationExpiration: "10/04/2020",
                    status: "Pending"
                },
                {
                    name: "Charles Pickett",
                    address: "Ap #159-1847 Dictum Street",
                    telephone: "1-972-883-3023",
                    email: "Nullam.enim@velfaucibusid.edu",
                    profession: "Scientist",
                    registrationDate: "08/02/2018",
                    registrationExpiration: "14/08/2020",
                    status: "Pending"
                },
                {
                    name: "Guy Farmer",
                    address: "Ap #970-8414 Nullam St.",
                    telephone: "636-9531",
                    email: "sed@rutrum.com",
                    profession: "Scientist",
                    registrationDate: "13/04/2018",
                    registrationExpiration: "20/04/2019",
                    status: "Pending"
                },
                {
                    name: "Jarrod Vaughan",
                    address: "9940 Fringilla St.",
                    telephone: "645-9519",
                    email: "elit.pretium@egetmetuseu.ca",
                    profession: "Scientist",
                    registrationDate: "02/09/2017",
                    registrationExpiration: "02/11/2020",
                    status: "Pending"
                },
                {
                    name: "Dolan James",
                    address: "Ap #709-6114 Natoque St.",
                    telephone: "986-6650",
                    email: "nec@dictumaugue.org",
                    profession: "Scientist",
                    registrationDate: "25/03/2017",
                    registrationExpiration: "20/02/2019",
                    status: "Pending"
                },
                {
                    name: "Acton Mcclain",
                    address: "P.O. Box 207, 2210 A, St.",
                    telephone: "818-4991",
                    email: "Nullam.ut.nisi@dignissim.com",
                    profession: "Scientist",
                    registrationDate: "09/09/2018",
                    registrationExpiration: "16/03/2020",
                    status: "Pending"
                },
                {
                    name: "Nathaniel Conley",
                    address: "5101 Nec Road",
                    telephone: "519-7963",
                    email: "molestie.pharetra.nibh@nibhDonec.ca",
                    profession: "Scientist",
                    registrationDate: "23/04/2017",
                    registrationExpiration: "10/03/2020",
                    status: "Pending"
                },
                {
                    name: "Luke Mckinney",
                    address: "Ap #653-6304 Sed Rd.",
                    telephone: "1-807-856-3461",
                    email: "nec@necmetusfacilisis.net",
                    profession: "Scientist",
                    registrationDate: "01/10/2017",
                    registrationExpiration: "11/03/2020",
                    status: "Pending"
                },
                {
                    name: "Solomon Richmond",
                    address: "P.O. Box 690, 8275 Consequat Street",
                    telephone: "413-4820",
                    email: "mattis.Cras.eget@dapibusquamquis.net",
                    profession: "Scientist",
                    registrationDate: "02/07/2017",
                    registrationExpiration: "17/10/2020",
                    status: "Pending"
                },
                {
                    name: "Lance Armstrong",
                    address: "183-6745 Ac Av.",
                    telephone: "613-5339",
                    email: "nulla.Donec.non@vitaeposuereat.org",
                    profession: "Scientist",
                    registrationDate: "09/09/2017",
                    registrationExpiration: "20/12/2019",
                    status: "Pending"
                },
                {
                    name: "Dylan Brooks",
                    address: "P.O. Box 223, 4544 Ipsum Avenue",
                    telephone: "907-1076",
                    email: "eros.non.enim@inmagnaPhasellus.com",
                    profession: "Scientist",
                    registrationDate: "07/03/2018",
                    registrationExpiration: "07/08/2019",
                    status: "Pending"
                },
                {
                    name: "Quentin Cruz",
                    address: "9784 Nec St.",
                    telephone: "454-6984",
                    email: "lobortis.quam@vel.co.uk",
                    profession: "Scientist",
                    registrationDate: "08/04/2017",
                    registrationExpiration: "13/09/2020",
                    status: "Pending"
                },
                {
                    name: "Donovan Burnett",
                    address: "Ap #792-2209 Vitae Rd.",
                    telephone: "245-4930",
                    email: "Cras@luctusipsumleo.net",
                    profession: "Scientist",
                    registrationDate: "03/08/2017",
                    registrationExpiration: "27/02/2020",
                    status: "Pending"
                },
                {
                    name: "Ciaran Newton",
                    address: "791-1609 Cursus. St.",
                    telephone: "928-1147",
                    email: "ac.nulla@convallisligula.edu",
                    profession: "Scientist",
                    registrationDate: "10/01/2017",
                    registrationExpiration: "19/05/2020",
                    status: "Pending"
                },
                {
                    name: "Hop Arnold",
                    address: "3014 Risus Road",
                    telephone: "170-6869",
                    email: "mollis@interdumCurabitur.edu",
                    profession: "Scientist",
                    registrationDate: "30/04/2018",
                    registrationExpiration: "07/09/2020",
                    status: "Pending"
                },
                {
                    name: "Gage Barlow",
                    address: "6488 Vel Road",
                    telephone: "416-5850",
                    email: "leo@miDuis.net",
                    profession: "Scientist",
                    registrationDate: "10/08/2017",
                    registrationExpiration: "23/12/2019",
                    status: "Pending"
                },
                {
                    name: "Seth Holder",
                    address: "Ap #339-8061 Non Ave",
                    telephone: "101-4850",
                    email: "tellus.sem.mollis@utquam.net",
                    profession: "Scientist",
                    registrationDate: "22/03/2018",
                    registrationExpiration: "14/07/2019",
                    status: "Pending"
                },
                {
                    name: "Lewis West",
                    address: "6567 Lectus Ave",
                    telephone: "726-1028",
                    email: "sociis.natoque@eratnonummyultricies.co.uk",
                    profession: "Scientist",
                    registrationDate: "03/01/2018",
                    registrationExpiration: "19/07/2019",
                    status: "Pending"
                },
                {
                    name: "Zahir Holman",
                    address: "Ap #426-1813 Eros. St.",
                    telephone: "1-932-414-9010",
                    email: "ipsum.Phasellus.vitae@consectetuerrhoncusNullam.com",
                    profession: "Scientist",
                    registrationDate: "03/11/2018",
                    registrationExpiration: "09/08/2020",
                    status: "Rejected"
                },
                {
                    name: "Alden Flowers",
                    address: "Ap #669-1972 At Ave",
                    telephone: "718-6018",
                    email: "mus.Proin@SuspendissesagittisNullam.net",
                    profession: "Scientist",
                    registrationDate: "22/09/2018",
                    registrationExpiration: "09/12/2020",
                    status: "Rejected"
                },
                {
                    name: "Blaze Bryan",
                    address: "4251 In Rd.",
                    telephone: "897-8168",
                    email: "justo.Proin.non@Seddictum.net",
                    profession: "Scientist",
                    registrationDate: "29/06/2017",
                    registrationExpiration: "19/12/2019",
                    status: "Pending"
                },
                {
                    name: "Quinlan Randolph",
                    address: "Ap #392-5524 Non Street",
                    telephone: "1-982-505-9437",
                    email: "tellus@blandit.edu",
                    profession: "Scientist",
                    registrationDate: "10/11/2017",
                    registrationExpiration: "04/08/2020",
                    status: "Pending"
                },
                {
                    name: "Igor Sanford",
                    address: "P.O. Box 423, 1923 Et Ave",
                    telephone: "604-4400",
                    email: "laoreet.posuere@quisdiam.com",
                    profession: "Scientist",
                    registrationDate: "04/05/2018",
                    registrationExpiration: "11/08/2020",
                    status: "Pending"
                },
                {
                    name: "Dalton Haney",
                    address: "P.O. Box 255, 8506 Pellentesque. St.",
                    telephone: "901-2563",
                    email: "ante@ultriciessemmagna.co.uk",
                    profession: "Scientist",
                    registrationDate: "14/02/2017",
                    registrationExpiration: "13/12/2020",
                    status: "Rejected"
                },
                {
                    name: "Hamish Pugh",
                    address: "Ap #245-7251 Quam. Street",
                    telephone: "788-4583",
                    email: "nibh.Phasellus.nulla@Proin.co.uk",
                    profession: "Scientist",
                    registrationDate: "14/12/2017",
                    registrationExpiration: "18/10/2019",
                    status: "Pending"
                },
                {
                    name: "Gavin Bray",
                    address: "P.O. Box 776, 3045 Nam Av.",
                    telephone: "1-914-852-4888",
                    email: "lobortis.augue.scelerisque@odioNaminterdum.net",
                    profession: "Scientist",
                    registrationDate: "25/08/2018",
                    registrationExpiration: "25/10/2020",
                    status: "Pending"
                },
                {
                    name: "George Peters",
                    address: "Ap #921-3374 In Road",
                    telephone: "1-498-954-4148",
                    email: "molestie@pharetra.org",
                    profession: "Scientist",
                    registrationDate: "03/06/2017",
                    registrationExpiration: "08/11/2020",
                    status: "Pending"
                },
                {
                    name: "Justin Cline",
                    address: "420-5563 Sed St.",
                    telephone: "1-606-722-5004",
                    email: "ac@ullamcorpernisl.org",
                    profession: "Scientist",
                    registrationDate: "25/08/2018",
                    registrationExpiration: "06/10/2019",
                    status: "Pending"
                },
                {
                    name: "Micah Rice",
                    address: "8234 Laoreet Ave",
                    telephone: "349-7588",
                    email: "turpis@risusDonecegestas.ca",
                    profession: "Scientist",
                    registrationDate: "26/01/2017",
                    registrationExpiration: "22/07/2019",
                    status: "Pending"
                },
                {
                    name: "Jameson Snider",
                    address: "7409 Erat Ave",
                    telephone: "1-249-954-9952",
                    email: "molestie@egetdictumplacerat.com",
                    profession: "Scientist",
                    registrationDate: "20/03/2017",
                    registrationExpiration: "24/03/2020",
                    status: "Rejected"
                },
                {
                    name: "Amir Haley",
                    address: "Ap #399-4955 Non St.",
                    telephone: "1-612-640-3143",
                    email: "conubia@seddolorFusce.edu",
                    profession: "Scientist",
                    registrationDate: "08/09/2018",
                    registrationExpiration: "29/07/2019",
                    status: "Pending"
                },
                {
                    name: "Uriah Crawford",
                    address: "9463 Ut Rd.",
                    telephone: "1-323-419-4704",
                    email: "magna@nisl.ca",
                    profession: "Scientist",
                    registrationDate: "24/02/2018",
                    registrationExpiration: "15/05/2019",
                    status: "Pending"
                },
                {
                    name: "Bevis Cooke",
                    address: "Ap #666-6284 Aliquet, Rd.",
                    telephone: "1-778-372-9544",
                    email: "Donec.egestas.Duis@cursuseteros.org",
                    profession: "Scientist",
                    registrationDate: "06/02/2018",
                    registrationExpiration: "20/10/2019",
                    status: "Pending"
                },
                {
                    name: "Christian Herman",
                    address: "225-9757 Donec Road",
                    telephone: "103-4599",
                    email: "morbi@ornare.edu",
                    profession: "Scientist",
                    registrationDate: "25/09/2018",
                    registrationExpiration: "21/06/2020",
                    status: "Pending"
                },
                {
                    name: "Sylvester Aguirre",
                    address: "553 A Road",
                    telephone: "1-996-313-0339",
                    email: "Fusce.fermentum.fermentum@justofaucibuslectus.co.uk",
                    profession: "Scientist",
                    registrationDate: "17/04/2017",
                    registrationExpiration: "01/05/2020",
                    status: "Pending"
                },
                {
                    name: "Mannix Shannon",
                    address: "Ap #600-495 Metus St.",
                    telephone: "1-238-435-7213",
                    email: "consectetuer@eterosProin.org",
                    profession: "Scientist",
                    registrationDate: "25/04/2018",
                    registrationExpiration: "12/12/2019",
                    status: "Pending"
                },
                {
                    name: "Nicholas Flores",
                    address: "241-3744 Adipiscing Rd.",
                    telephone: "1-800-987-9943",
                    email: "mus.Proin.vel@auctor.com",
                    profession: "Scientist",
                    registrationDate: "18/04/2018",
                    registrationExpiration: "02/06/2019",
                    status: "Pending"
                },
                {
                    name: "Neville Williamson",
                    address: "3822 Velit. St.",
                    telephone: "1-236-577-0235",
                    email: "at.iaculis.quis@aliquetodioEtiam.ca",
                    profession: "Scientist",
                    registrationDate: "08/08/2018",
                    registrationExpiration: "14/11/2019",
                    status: "Pending"
                },
                {
                    name: "Mufutau Todd",
                    address: "2313 Curabitur Road",
                    telephone: "170-7186",
                    email: "euismod.ac.fermentum@SuspendisseeleifendCras.ca",
                    profession: "Scientist",
                    registrationDate: "16/10/2017",
                    registrationExpiration: "23/08/2019",
                    status: "Pending"
                },
                {
                    name: "Seth Daniels",
                    address: "Ap #291-6195 Orci Rd.",
                    telephone: "539-2052",
                    email: "arcu@semperegestasurna.org",
                    profession: "Scientist",
                    registrationDate: "04/01/2017",
                    registrationExpiration: "17/08/2020",
                    status: "Pending"
                },
                {
                    name: "Eaton Pennington",
                    address: "Ap #597-2818 Donec Avenue",
                    telephone: "1-107-373-6137",
                    email: "Vivamus@etarcuimperdiet.co.uk",
                    profession: "Scientist",
                    registrationDate: "21/09/2017",
                    registrationExpiration: "11/10/2019",
                    status: "Pending"
                },
                {
                    name: "Byron Morgan",
                    address: "P.O. Box 911, 7615 Donec Rd.",
                    telephone: "1-114-891-2352",
                    email: "eget.odio.Aliquam@eu.org",
                    profession: "Scientist",
                    registrationDate: "23/11/2018",
                    registrationExpiration: "05/10/2020",
                    status: "Pending"
                },
                {
                    name: "Matthew Larson",
                    address: "219-934 Nulla Avenue",
                    telephone: "1-199-952-7451",
                    email: "lectus.sit@sit.edu",
                    profession: "Scientist",
                    registrationDate: "22/03/2017",
                    registrationExpiration: "12/12/2019",
                    status: "Pending"
                },
                {
                    name: "Felix Emerson",
                    address: "736-9928 Dapibus Rd.",
                    telephone: "808-9124",
                    email: "sem.Nulla.interdum@velarcuCurabitur.co.uk",
                    profession: "Scientist",
                    registrationDate: "18/06/2017",
                    registrationExpiration: "26/04/2019",
                    status: "Pending"
                },
                {
                    name: "Jakeem Blanchard",
                    address: "2615 Lobortis Street",
                    telephone: "1-739-539-8402",
                    email: "dui@vel.ca",
                    profession: "Scientist",
                    registrationDate: "24/10/2017",
                    registrationExpiration: "10/10/2019",
                    status: "Pending"
                },
                {
                    name: "Hakeem Horn",
                    address: "2078 Arcu. St.",
                    telephone: "1-356-526-9728",
                    email: "consectetuer@odiotristiquepharetra.edu",
                    profession: "Scientist",
                    registrationDate: "28/02/2018",
                    registrationExpiration: "23/01/2019",
                    status: "Pending"
                },
                {
                    name: "Hall Austin",
                    address: "386-7892 Eu, Road",
                    telephone: "582-9788",
                    email: "arcu@Donec.org",
                    profession: "Scientist",
                    registrationDate: "29/08/2018",
                    registrationExpiration: "15/11/2020",
                    status: "Pending"
                },
                {
                    name: "Kirk Sampson",
                    address: "336-4525 Eleifend, Avenue",
                    telephone: "855-1554",
                    email: "sem.ut@quam.com",
                    profession: "Scientist",
                    registrationDate: "09/03/2018",
                    registrationExpiration: "23/08/2020",
                    status: "Pending"
                },
                {
                    name: "Colin Mckinney",
                    address: "9195 Facilisis Rd.",
                    telephone: "1-200-455-4712",
                    email: "montes@odiosemper.ca",
                    profession: "Scientist",
                    registrationDate: "19/03/2017",
                    registrationExpiration: "11/04/2019",
                    status: "Pending"
                },
                {
                    name: "Ciaran Perkins",
                    address: "Ap #456-9805 Integer St.",
                    telephone: "1-511-214-0532",
                    email: "luctus@Aliquamvulputate.org",
                    profession: "Scientist",
                    registrationDate: "19/03/2017",
                    registrationExpiration: "23/11/2020",
                    status: "Pending"
                },
                {
                    name: "Tiger Miranda",
                    address: "143-2958 Lobortis Ave",
                    telephone: "1-550-325-2390",
                    email: "dictum.eu.placerat@in.co.uk",
                    profession: "Scientist",
                    registrationDate: "07/08/2018",
                    registrationExpiration: "07/05/2020",
                    status: "Pending"
                },
                {
                    name: "Abbot Sargent",
                    address: "Ap #607-7388 Ipsum Street",
                    telephone: "818-8502",
                    email: "auctor.odio.a@anteipsumprimis.com",
                    profession: "Scientist",
                    registrationDate: "30/09/2018",
                    registrationExpiration: "21/11/2019",
                    status: "Pending"
                },
                {
                    name: "Bevis Fuentes",
                    address: "P.O. Box 502, 9311 Malesuada Road",
                    telephone: "874-1629",
                    email: "ut@ornareplacerat.com",
                    profession: "Scientist",
                    registrationDate: "30/03/2018",
                    registrationExpiration: "13/01/2019",
                    status: "Pending"
                },
                {
                    name: "Ishmael Keith",
                    address: "Ap #821-275 Praesent Ave",
                    telephone: "138-0614",
                    email: "at@loremtristique.net",
                    profession: "Scientist",
                    registrationDate: "18/10/2018",
                    registrationExpiration: "27/01/2020",
                    status: "Pending"
                },
                {
                    name: "Brandon Andrews",
                    address: "Ap #550-1140 Ante Av.",
                    telephone: "742-7640",
                    email: "quam.dignissim.pharetra@ametrisusDonec.net",
                    profession: "Scientist",
                    registrationDate: "22/02/2017",
                    registrationExpiration: "29/05/2020",
                    status: "Pending"
                },
                {
                    name: "Peter Rojas",
                    address: "9431 Amet Avenue",
                    telephone: "199-8716",
                    email: "eget.ipsum@nonummyac.org",
                    profession: "Scientist",
                    registrationDate: "29/11/2017",
                    registrationExpiration: "05/07/2019",
                    status: "Pending"
                },
                {
                    name: "Ferris Walker",
                    address: "P.O. Box 608, 8798 Duis Avenue",
                    telephone: "1-758-927-8341",
                    email: "ipsum.leo.elementum@Duis.co.uk",
                    profession: "Scientist",
                    registrationDate: "23/08/2017",
                    registrationExpiration: "18/02/2020",
                    status: "Pending"
                },
                {
                    name: "Eric Fowler",
                    address: "P.O. Box 223, 6356 A Avenue",
                    telephone: "531-6683",
                    email: "eleifend@ligulaAenean.org",
                    profession: "Scientist",
                    registrationDate: "28/09/2017",
                    registrationExpiration: "05/06/2020",
                    status: "Pending"
                },
                {
                    name: "Hayes Gardner",
                    address: "841-4976 Ut Avenue",
                    telephone: "601-6937",
                    email: "vel.faucibus.id@Quisque.edu",
                    profession: "Scientist",
                    registrationDate: "13/10/2018",
                    registrationExpiration: "16/10/2019",
                    status: "Pending"
                },
                {
                    name: "Oren Fields",
                    address: "2713 Lobortis. Street",
                    telephone: "1-213-206-6131",
                    email: "egestas.Duis@convallisincursus.com",
                    profession: "Scientist",
                    registrationDate: "10/01/2018",
                    registrationExpiration: "22/02/2020",
                    status: "Pending"
                },
                {
                    name: "George Jacobson",
                    address: "567-9156 Et Av.",
                    telephone: "764-9900",
                    email: "neque.venenatis@fringillacursus.edu",
                    profession: "Scientist",
                    registrationDate: "24/10/2018",
                    registrationExpiration: "15/11/2020",
                    status: "Pending"
                },
                {
                    name: "Xenos Giles",
                    address: "P.O. Box 722, 4247 Auctor, Ave",
                    telephone: "523-1724",
                    email: "tortor.dictum@volutpat.co.uk",
                    profession: "Scientist",
                    registrationDate: "16/09/2018",
                    registrationExpiration: "03/08/2019",
                    status: "Pending"
                },
                {
                    name: "Abdul Harris",
                    address: "834-5252 Nascetur Ave",
                    telephone: "729-6160",
                    email: "Pellentesque.ultricies@mipedenonummy.edu",
                    profession: "Scientist",
                    registrationDate: "02/05/2017",
                    registrationExpiration: "12/12/2019",
                    status: "Pending"
                },
                {
                    name: "Andrew Summers",
                    address: "345-8525 Convallis Ave",
                    telephone: "133-9991",
                    email: "ac.facilisis.facilisis@at.net",
                    profession: "Scientist",
                    registrationDate: "17/11/2017",
                    registrationExpiration: "23/12/2020",
                    status: "Pending"
                },
                {
                    name: "Bevis Hendrix",
                    address: "4351 Quis, Av.",
                    telephone: "1-213-521-9079",
                    email: "vitae.purus@etnetus.net",
                    profession: "Scientist",
                    registrationDate: "26/01/2017",
                    registrationExpiration: "31/12/2019",
                    status: "Pending"
                },
                {
                    name: "Baker Bender",
                    address: "P.O. Box 511, 8111 Eget Av.",
                    telephone: "554-9645",
                    email: "Nullam.scelerisque@felis.net",
                    profession: "Scientist",
                    registrationDate: "08/09/2017",
                    registrationExpiration: "26/03/2019",
                    status: "Rejected"
                },
                {
                    name: "Samson Meadows",
                    address: "157-1578 Donec Av.",
                    telephone: "216-8537",
                    email: "iaculis.aliquet@odioapurus.net",
                    profession: "Scientist",
                    registrationDate: "03/01/2017",
                    registrationExpiration: "12/06/2020",
                    status: "Rejected"
                },
                {
                    name: "Gray Simon",
                    address: "Ap #930-552 Euismod Avenue",
                    telephone: "871-8698",
                    email: "non.dapibus.rutrum@risusatfringilla.net",
                    profession: "Scientist",
                    registrationDate: "09/02/2017",
                    registrationExpiration: "19/05/2019",
                    status: "Pending"
                },
                {
                    name: "Edan Warren",
                    address: "2616 Ornare, Rd.",
                    telephone: "1-240-353-4914",
                    email: "diam.nunc@Nunclaoreetlectus.org",
                    profession: "Scientist",
                    registrationDate: "25/05/2017",
                    registrationExpiration: "28/10/2019",
                    status: "Pending"
                },
                {
                    name: "Octavius Hodges",
                    address: "Ap #487-3011 Integer Street",
                    telephone: "500-8954",
                    email: "dolor@sed.co.uk",
                    profession: "Scientist",
                    registrationDate: "13/03/2017",
                    registrationExpiration: "09/08/2019",
                    status: "Pending"
                },
                {
                    name: "Elton Strickland",
                    address: "P.O. Box 634, 2476 Dolor. Ave",
                    telephone: "550-8137",
                    email: "nisi.dictum.augue@pedeultricesa.edu",
                    profession: "Scientist",
                    registrationDate: "29/03/2018",
                    registrationExpiration: "01/09/2019",
                    status: "Pending"
                },
                {
                    name: "Arden Tanner",
                    address: "281-7961 Hendrerit Av.",
                    telephone: "799-7064",
                    email: "a.felis@eratnequenon.com",
                    profession: "Scientist",
                    registrationDate: "26/01/2017",
                    registrationExpiration: "28/12/2020",
                    status: "Pending"
                },
                {
                    name: "Philip Wheeler",
                    address: "Ap #599-1599 Eu, Street",
                    telephone: "1-309-189-7360",
                    email: "sem.Nulla@Cras.org",
                    profession: "Scientist",
                    registrationDate: "15/05/2017",
                    registrationExpiration: "13/06/2019",
                    status: "Pending"
                },
                {
                    name: "Adrian Ellison",
                    address: "Ap #438-7196 Curae; Street",
                    telephone: "1-359-848-3779",
                    email: "ligula.Donec@metus.net",
                    profession: "Scientist",
                    registrationDate: "18/11/2017",
                    registrationExpiration: "22/09/2019",
                    status: "Pending"
                },
                {
                    name: "Justin Stone",
                    address: "Ap #881-1233 Porttitor Av.",
                    telephone: "1-507-685-7089",
                    email: "et@enimCurabitur.org",
                    profession: "Scientist",
                    registrationDate: "08/07/2017",
                    registrationExpiration: "06/10/2020",
                    status: "Pending"
                },
                {
                    name: "Paki Howe",
                    address: "2246 Lobortis, Rd.",
                    telephone: "1-434-989-6884",
                    email: "consectetuer.adipiscing@neque.net",
                    profession: "Scientist",
                    registrationDate: "26/05/2018",
                    registrationExpiration: "29/12/2019",
                    status: "Pending"
                },
                {
                    name: "Lyle Mcknight",
                    address: "457-4365 Magna. Rd.",
                    telephone: "126-9516",
                    email: "ligula.eu@convallisante.co.uk",
                    profession: "Scientist",
                    registrationDate: "11/02/2018",
                    registrationExpiration: "18/01/2020",
                    status: "Pending"
                },
                {
                    name: "Emerson Stanton",
                    address: "797-8830 Iaculis Rd.",
                    telephone: "955-2129",
                    email: "magnis.dis.parturient@cursusvestibulumMauris.net",
                    profession: "Scientist",
                    registrationDate: "03/12/2018",
                    registrationExpiration: "18/04/2019",
                    status: "Pending"
                },
                {
                    name: "Hasad Rhodes",
                    address: "3826 Aliquet. St.",
                    telephone: "1-993-394-7152",
                    email: "fringilla@ridiculus.net",
                    profession: "Scientist",
                    registrationDate: "07/01/2017",
                    registrationExpiration: "06/09/2020",
                    status: "Pending"
                },
                {
                    name: "Price Sharpe",
                    address: "933 Sed Ave",
                    telephone: "477-3348",
                    email: "vel.pede@variusultricesmauris.com",
                    profession: "Scientist",
                    registrationDate: "05/01/2017",
                    registrationExpiration: "23/12/2019",
                    status: "Pending"
                },
                {
                    name: "Dante English",
                    address: "Ap #529-4656 Dapibus Avenue",
                    telephone: "1-335-191-1487",
                    email: "lorem.auctor.quis@atnisi.edu",
                    profession: "Scientist",
                    registrationDate: "17/02/2017",
                    registrationExpiration: "10/03/2019",
                    status: "Pending"
                },
                {
                    name: "Cadman Carney",
                    address: "P.O. Box 787, 363 Nullam Ave",
                    telephone: "195-9715",
                    email: "nec.imperdiet.nec@tempor.net",
                    profession: "Scientist",
                    registrationDate: "08/01/2017",
                    registrationExpiration: "20/07/2019",
                    status: "Pending"
                },
                {
                    name: "Rigel Melton",
                    address: "P.O. Box 319, 6848 Nullam Rd.",
                    telephone: "330-6563",
                    email: "neque.tellus.imperdiet@cursusluctusipsum.org",
                    profession: "Scientist",
                    registrationDate: "03/02/2017",
                    registrationExpiration: "06/04/2019",
                    status: "Pending"
                },
                {
                    name: "Hamish Wynn",
                    address: "Ap #751-495 Consequat Rd.",
                    telephone: "1-737-332-9434",
                    email: "aliquet.sem.ut@arcu.edu",
                    profession: "Scientist",
                    registrationDate: "11/09/2018",
                    registrationExpiration: "13/04/2019",
                    status: "Pending"
                },
                {
                    name: "Cameron Valencia",
                    address: "9864 Phasellus Avenue",
                    telephone: "223-7442",
                    email: "enim.Curabitur.massa@idantedictum.edu",
                    profession: "Scientist",
                    registrationDate: "17/04/2017",
                    registrationExpiration: "12/10/2019",
                    status: "Pending"
                },
                {
                    name: "Ulric Pena",
                    address: "P.O. Box 884, 8436 Vivamus Ave",
                    telephone: "175-4951",
                    email: "faucibus.orci.luctus@parturient.net",
                    profession: "Scientist",
                    registrationDate: "22/10/2018",
                    registrationExpiration: "31/05/2019",
                    status: "Pending"
                },
                {
                    name: "Christopher Newton",
                    address: "P.O. Box 244, 5901 Convallis Rd.",
                    telephone: "528-4958",
                    email: "sit.amet@Etiamimperdiet.org",
                    profession: "Scientist",
                    registrationDate: "10/12/2017",
                    registrationExpiration: "18/07/2020",
                    status: "Pending"
                },
                {
                    name: "Fritz French",
                    address: "753-3467 Lectus Ave",
                    telephone: "743-4339",
                    email: "euismod.in.dolor@orci.com",
                    profession: "Scientist",
                    registrationDate: "30/04/2018",
                    registrationExpiration: "07/10/2020",
                    status: "Pending"
                },
                {
                    name: "Samuel Shepard",
                    address: "294 Taciti Street",
                    telephone: "649-1790",
                    email: "erat.eget.tincidunt@scelerisque.com",
                    profession: "Scientist",
                    registrationDate: "31/03/2018",
                    registrationExpiration: "16/11/2020",
                    status: "Pending"
                },
                {
                    name: "Oleg Mendoza",
                    address: "9344 Dui. Ave",
                    telephone: "1-328-213-1303",
                    email: "ut@urnaet.net",
                    profession: "Scientist",
                    registrationDate: "20/12/2017",
                    registrationExpiration: "17/12/2020",
                    status: "Pending"
                }
            ]
        };
        $scope.filterModel = function (t) {
            return 'filter' + t;
        }
    })
    .directive('filterTable', function () {
        return {
            restrict: 'E',
            scope: {
                data: '=data',
                filters: '@filters'
            },
            templateUrl: 'filter-table.html',
            controller: function ($scope, $filter) {
                if ($scope.filters == null) {
                    $scope.filters = {};
                }
                $scope.filteredData = $scope.data.data;

                // pagination
                $scope.currentPage = 1;
                $scope.itemsPerPage = 10;

                $scope.prevPage = function () {
                    if ($scope.currentPage > 1) {
                        $scope.currentPage--;
                    }
                };

                $scope.prevPageDisabled = function () {
                    return $scope.currentPage === 1 ? "disabled" : "";
                };

                $scope.pageCount = function () {
                    return Math.ceil($scope.filteredData.length / $scope.itemsPerPage) - 1;
                };

                $scope.nextPage = function () {
                    if ($scope.currentPage < $scope.pageCount()) {
                        $scope.currentPage++;
                    }
                };

                $scope.nextPageDisabled = function () {
                    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
                };
                // end pagination
                

                $scope.filterData = function (data, type) {
                    $scope.currentPage = 1;
                    var value = $scope.filters[data];

                    $scope.filteredData = $scope.data.data.filter(function (dataItem) {
                        if (type == 'text') {
                            return dataItem[data].toLowerCase().indexOf(value.toLowerCase()) != -1;
                        } else if (type == 'list') {
                            return dataItem[data] == value;
                        }
                        return false;
                    });
                };

                $scope.clearFilters = function () {
                    $scope.filters = {};
                    $scope.filteredData = $scope.data.data;
                }
            }
        }
    }).filter('offset', function () {
        return function (input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        };
    })