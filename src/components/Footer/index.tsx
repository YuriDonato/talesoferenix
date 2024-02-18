import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <p>contato</p>
      <p>mapa do site</p>
      <p>buscar</p>
      <Link to={'/donate'}>doar</Link>
      <p>Copyright © 2014–2023 by Beltrão Y. Donato. All Rights Reserved.</p>
    </>
  )
}

export default Footer
