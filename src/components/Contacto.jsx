import "../styles/stylesCards.css";

export default function Contacto() {
  return (
    <>
      <h2>¡Contactenos!</h2>

      <div className="div-contacto">
        <form action="" className="formulario-contacto">
          <label for="nombre">Ingrese su nombre</label>
          <input type="text" />
           <label for="email">Ingrese su correo</label>
          <input type="email" required />
          <label for="nombre">Escriba el Asunto del mensaje</label>
          <input type="text" />
          <label for="nombre" required>Añada mas informacion al asunto</label>
          <textarea id="mensaje" name="mensaje" rows="10" cols="50"  style={{resize: 'none'}} ></textarea>
          <button type="submit">Enviar consulta</button>
        </form>
        <p className="p-formulario">
          ⛔ La información enviada a través de este formulario o por correo
          electrónico puede no estar cifrada y podría ser vulnerable a accesos
          no autorizados. No envíe datos sensibles o confidenciales, como
          contraseñas, números de tarjetas de crédito, documentos de identidad o
          información personal delicada. Para comunicaciones seguras, utilice
          canales protegidos y servicios cifrados.
        </p>
      </div>
    </>
  );
}
