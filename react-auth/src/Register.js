import React from 'react';
import {Form, Button}  from "react-bootstrap";

export default function Register() {
    return (
        <>
            <h2>REGÍSTRATE</h2>
            <Form>
                <Form.Group controlId='formBasicNombre'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='Nombre' />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Email' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder='Contraseña' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crea tu Cuenta
                </Button>
            </Form>
        </>
    )
}