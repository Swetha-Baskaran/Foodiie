import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqAccordian() {
	return (
		<div>
			{[1, 2, 3, 4].map((e, index) => {
				return (
					<Accordion key={index} sx={{margin:'2rem 0', background:'#f9f9f9', padding:'1rem', boxShadow:'none', borderRadius:'10px'}}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon sx={{fontSize:'2rem', borderRadius:'50%', background:'#ff5331', color:'white' }} />}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<Typography sx={{fontSize:'1.5rem'}}>I got the wrong food. What should i do ?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo
								lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
}
