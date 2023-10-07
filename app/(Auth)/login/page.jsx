"use client"
import React, { useRef } from 'react'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation'

function Login() {

    return (
        <Container>
            <FormContainer>
                <TitleContainer>Login</TitleContainer>
                <CustomInput placeholder='Enter Email...' type='text'  />
                <CustomInput placeholder='Enter Password...' type='password' />
                <CustomButton> Submit </CustomButton>
            </FormContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

const CustomInput = styled.input`
    min-width: 500px;
    min-height: 60px;
    padding:15px;

    border-radius: 15px;
    border: 1px solid skyblue;

    margin-top: 15px;
`

const CustomButton = styled.button`
    margin-top: 15px;
    height: 60px;

    font-size: 1.5em;
    border-radius: 10px;
    color: skyblue;
    background-color: white;
    border: 1px solid skyblue;
`