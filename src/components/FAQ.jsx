import React, { useState } from 'react'
import "./FAQ.css";
import Header from './Header';
import Footer from './Footer';

import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';

function FAQ(){

     const [open, setOpen] = useState('');
     const toggle = (id) => {
       if (open === id) {
         setOpen();
       } else {
         setOpen(id);
       }
     }

  return (
    <div >
        <Header/>
        <div className='titleContainer'>
            <h1>Sıkça Sorulan Sorular</h1>
        </div>



        <div className='accordionField'>
            <Accordion flush open={open} toggle={toggle} className='ControlledAccordion'> 
            
                <AccordionItem className='AccordionField'>
                    <AccordionHeader targetId="1">CoreCampus Nedir?</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <strong>CoreCampus</strong>, çeşitli konularda eğitim videoları sunan çevrimiçi bir platformdur. Sitede yer alan videoları izleyerek konuları öğrenebilir ve daha sonra sınavlara girerek belge kazanabilirsiniz.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem className='AccordionField'>
                    <AccordionHeader targetId="2">CoreCampus'te Hangi Konularda Eğitim Videoları Bulunmaktadır?</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>CoreCampus</strong>, yazılım geliştirme, matematik, şekiller, algoritma ve daha birçok konuda eğitim videoları sunmaktadır. Geniş bir yelpazede bilgiye erişim sağlar.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="3">CoreCampus'te Eğitim Videoları Ücretli mi?</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>CoreCampus</strong> platformunda bazı eğitim videoları ücretsiz olarak sunulurken, bazıları için ücretli erişim gerekebilir.
                    </AccordionBody>  
                </AccordionItem>
            
                <AccordionItem>
                    <AccordionHeader targetId="4">CoreCampus Sınavları Nasıl İşler ve Belge Nasıl Alınır?</AccordionHeader>
                    <AccordionBody accordionId="4">
                        <strong>CoreCampus</strong> platformunda eğitim videolarını izledikten sonra ilgili konuda bir sınava girebilirsiniz. Sınava girmek için eğitim videolarını bitirme gibi bir şart yoktur. Başarılı olduğunuzda, sınav sonuçlarınızı gösteren bir belge alırsınız.
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="5">CoreCampus'te Hangi Sertifikalar Geçerlidir?</AccordionHeader>
                    <AccordionBody accordionId="5">
                        <strong>CoreCampus</strong> platformunda elde ettiğiniz belgeler, ilgili konuda bilgi ve yeteneklerinizi kanıtlar. Bu belgeler, işverenler veya eğitim kurumları tarafından tanınabilir.
                    </AccordionBody>
                </AccordionItem>
                
                <AccordionItem>
                    <AccordionHeader targetId="6">CoreCampus'te Hangi Dillerde Eğitim Videoları Bulunmaktadır?  </AccordionHeader>
                    <AccordionBody accordionId="6">
                        <strong>CoreCampus</strong>'te henüz sadece Türkçe eğitim dökümanları mevcuttur.
                    </AccordionBody>
                </AccordionItem>

            </Accordion>
        </div>     

   
    <Footer/>

    </div>      
  );
}

export default FAQ;