import { Container } from "react-bootstrap";
import FormularioContacto from "./FormularioContacto.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SeccionContacto = () => {
  return (
    <section className="mainSection">
      <div className="bannerContacto">
        <img
          src="https://images.pexels.com/photos/3768095/pexels-photo-3768095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen de contacto"
          className="bannerContactoImg"
        />
        <Container className="text-center overlay">
          <h1
            className="tituloSeccionContacto"
          >
            Contacto
          </h1>
        </Container>
      </div>
      <section className="container-fluid row seccionContactoInfo p-3">
        <div className="col-md-6 my-5">
          <h3>Hotel Oasis Urbano </h3>
          <p className="lead"><i class="bi bi-geo-alt"></i> Tucumán, Argentina</p>
          <hr />
          <p><i class="bi bi-phone"></i> <strong> Teléfono:</strong><span class="lead"> +54 9 381-6688905</span></p>
          <p><i class="bi bi-envelope"></i> <strong> E-mail:</strong><span class="lead"> oasisurbano@gmail.com</span></p>
        </div>
        <div className="col-md-6">
          <h2 className="text-center">CONTÁCTANOS</h2>
          <FormularioContacto></FormularioContacto>
        </div>
     </section>
     <div className=" container-fluid seccionContactoMapa p-3">
     <h2 className="text-center">¡Vení a Visitarnos!</h2>
     <iframe
              className="w-100 mt-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679493985!2d-65.20974192366222!3d-26.83657849002869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1717700548290!5m2!1ses-419!2sar"
              height="400"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
     </div>
    </section>
  );
};

export default SeccionContacto;
