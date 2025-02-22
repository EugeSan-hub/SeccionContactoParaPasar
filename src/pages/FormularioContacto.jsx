import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const consultaValidada = (consulta) => {
    // Acción para enviar la consulta
    Swal.fire({
      title: "Consulta enviada",
      text: "Tu consulta ha sido enviada correctamente",
      icon: "success",
    });
    reset(); // Resetea el formulario después de enviar
  };

  return (
    <Form className="" onSubmit={handleSubmit(consultaValidada)}>
      {/* Input Nombre */}
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "Debe ingresar al menos 2 caracteres",
            },
            maxLength: {
              value: 50,
              message: "Debe ingresar como máximo 50 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
      </Form.Group>

      {/* Input Email */}
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debes ingresar un email válido",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
      </Form.Group>

      {/* Textarea Consulta */}
      <Form.Group className="mb-3" controlId="formConsulta">
        <Form.Label>Consulta:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escribe tu consulta"
          {...register("consulta", {
            required: "La consulta es obligatoria",
            minLength: {
              value: 10,
              message: "Debe ingresar al menos 10 caracteres",
            },
            maxLength: {
              value: 300,
              message: "Debe ingresar como máximo 300 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.consulta?.message}</Form.Text>
      </Form.Group>

      <Button type="submit" className="text-end botonFormularioContacto">
        Enviar Consulta
      </Button>
    </Form>
  );
};

export default FormularioContacto;
