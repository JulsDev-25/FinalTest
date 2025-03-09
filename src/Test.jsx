// import { ExpandMore } from '@mui/icons-material';
// import { Accordion, AccordionDetails, AccordionSummary, AppBar, Container, Drawer, IconButton, List, ListItem, ListItemButton, MenuItem, Tab, Tabs, Toolbar, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';

// const Test = () => {
//     const accordionElm = ["text1", "text1", "text3", "text4", "text4", "text4"]
//     const [value, setValue] = useState(0);
//     const [open, setOpen] = useState(false);
//     const [acc, setAcc] = useState("")

//     const handleChange = (val) => {
//         setValue(val);
//     };

//     const handleClose = () => {
//         setOpen(!open)
//     }

//     const handleClick = (e) => {
//         setOpen(!open)
//     }

//     return (
//         <>
//             <AppBar>
//                 <Toolbar>

//                     <Typography variant="button">
//                         Logo
//                     </Typography>
//                     <Tabs
//                         textColor="inherit"
//                         value={value}
//                         onChange={handleChange}
//                         sx={{ ml: "auto", display: { xs: "none", sm: "block" } }}
//                     >
//                         <Tab label="Home" />
//                         <Tab label="Contact us" />
//                         <Tab label="Appropos" />
//                     </Tabs>

//                     <MenuIcon onClick={handleClick} sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }} />
//                     <Drawer
//                         open={open}
//                         onClose={handleClose}
//                     >
//                         <List>
//                             {
//                                 accordionElm.map((elmt) => (
//                                     <ListItemButton onClick={handleClose}>
//                                         <ListItem>{elmt}</ListItem>
//                                     </ListItemButton>
//                                 ))
//                             }

//                         </List>
//                     </Drawer>
//                 </Toolbar>
//             </AppBar>
//             <Container maxWidth="md" sx={{ backgroundColor: "Green" }}>
//                 <Typography variant="h1">Bonjour tous les monde</Typography>
//             </Container>
//             <Typography sx={{ backgroundColor: "purple" }} variant="h1">Titre de niveau 1</Typography>

//             <Container maxWidth="sm" >
//                 {
//                     accordionElm.map((elmt, index) => (
//                         <Accordion key={index} expanded={acc === index} onClick={() => acc === index ? setAcc("") : setAcc(index)} onChange={(e) => setAcc(index)}>
//                             <AccordionSummary expandIcon={<ExpandMore />} >{elmt} </AccordionSummary>
//                             <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nihil nulla saepe perspiciatis enim. Repellendus doloribus tenetur, temporibus neque labore dolore. Nulla alias saepe, expedita iure delectus voluptatum culpa pariatur?</AccordionDetails>
//                         </Accordion>
//                     ))
//                 }

//             </Container>
//         </>
//     );
// }

// export default Test;
