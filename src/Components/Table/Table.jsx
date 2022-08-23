import React from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      img: "https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg",
      fname: "Adam",
      lname: "Miled",
      date: "01/05/2022",
      sub: "1 semaine",
      stat: "Payé",
    },

    {
      id: 2,
      img: "https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg",
      fname: "Test",
      lname: "Name",
      date: "03/05/2022",
      sub: "1 mois",
      stat: " Pause",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz-2-NgcLTjYfTUeuvR1z6G7U_z_81fs5wQ&usqp=CAU",
      fname: "Hamid",
      lname: "Dima",
      date: "10/09/2022",
      sub: "3 semaines",
      stat: "Payé",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0suNEf6XRq2cJZzidf6iRqDyVOz1QwsFJGw&usqp=CAU",
      fname: "Test",
      lname: "Account",
      date: "02/04/2022",
      sub: "1 semaine",
      stat: " Pause",
    },
    {
      id: 5,
      img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WZEUY7Q6GMI6ZPVIGCHKCNCZJ4.jpg&w=1200",
      fname: "Nermine",
      lname: "Hedi",
      date: "01/01/2023",
      sub: "1 année",
      stat: "Expulsé",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID client</TableCell>
            <TableCell className="tableCell">Nom</TableCell>
            <TableCell className="tableCell">Prenom</TableCell>
            <TableCell className="tableCell">Date d'abonnement</TableCell>
            <TableCell className="tableCell">Type d'abonnement</TableCell>
            <TableCell className="tableCell">Etat </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">
          
                <div className="cellWrapper">
                {row.id}
                  <img src={row.img} alt="profile_pic" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.fname}</TableCell>
              <TableCell className="tableCell">{row.lname}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.sub}</TableCell>
              <TableCell className="tableCell">

<span className={`stat ${row.stat} `}>

{row.stat}
</span>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
