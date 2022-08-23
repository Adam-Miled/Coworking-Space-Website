export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    
    { field: 'username', headerName: 'Nom Client', width: 250 , renderCell: (params)=> {
return (

    <div className="cellwithImg">
        <img className="cellImg" src={params.row.img} alt="avatar"/>
        {params.row.username}
         </div> 
)

    } },
    { field: 'email', headerName: 'Adresse Email', width: 400 },
    { field: 'phone', headerName: 'Num Telephone', width: 200 },
    {    field: 'cin', headerName: 'Num CIN', width: 150,  },


] ;


// data

export const userRows = [
    { id: 1, username: 'Snow John', img:'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' , email: 'jhonny123@gmail.com', phone : '56269820' ,cin: 14002335 },
    { id: 2, username: 'Lannister Celena', img:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/6/d/66da29be61_99905_google-images-rechercher.jpg' ,  email: 'Cersei05@hotmail.fr',phone : '2165326' , cin: 6352942 },
    { id: 3, username: 'Lannister Jaime', img:'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' ,  email: 'JaimeStark@gmail.com',phone : '956239' , cin: 68593345 },
    { id: 4, username: 'Stark Stark', img:'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg' ,  email: 'AryaStark@gmail.com', phone : '785220' ,cin: 136236 },
    { id: 5, username: 'Miss Targaryen',  img:'https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg' , email: 'Daenerys125@yahoo.fr',phone : '56269820' , cin: null },
    { id: 6, username: 'Melisandre', img:'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw' ,  email: 'crush.live@gmail.com', phone : '3625934' ,cin: null },
    { id: 7, username: 'Clifford Ferrara', img:'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg' ,  email: 'Ferrara@uvt.fr',phone : '9329820' , cin: 42316324 },
    { id: 8, username: 'Frances Alias', img:'https://media.istockphoto.com/photos/portrait-of-focused-curious-man-looking-through-photo-frame-made-of-picture-id1203078805?k=20&m=1203078805&s=612x612&w=0&h=WqIK02qReuo1q1NzZGHrS07Sa-xxcGbabRELfjm-jOw=' ,  email: 'Rossini.gorgini@poste.com', phone : '02539820' , cin: 26985236 },
    { id: 9, username: 'Roxie foxie', img:'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480' ,  email: 'Harveyfoxie@live.fr', phone : '3649820' , cin: 3268265 },
  ];
