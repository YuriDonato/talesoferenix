import React from 'react'
import { QRCode } from 'react-qrcode'
import { useToast } from '@chakra-ui/react'
import copy from 'copy-to-clipboard'
import { Container } from '../HomeCard/styles'
import Pix from '../../assets/images/pix.png'

const PixDonation = () => {
  const toast = useToast()
  const pixKey =
    '00020126360014BR.GOV.BCB.PIX0114+55679927180505204000053039865802BR5915Tales of Erenix6006Recife62070503***63040B77'

  const handleCopy = () => {
    copy(pixKey)
    toast({
      title: 'Chave PIX copiada para área de transferencia!',
      status: 'success',
      position: 'bottom',
      duration: 9000,
      isClosable: true
    })
  }

  return (
    <Container>
      <h2>Faça uma doação pix</h2>
      <p>Escaneie o QR Code abaixo ou copie a chave PIX:</p>
      <img src={Pix}></img>
      <button onClick={handleCopy}>Copiar Chave PIX</button>
    </Container>
  )
}

export default PixDonation
