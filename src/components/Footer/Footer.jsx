export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div>
        <p>&copy; {year} - Desenvolvido com React</p>
      </div>
    </footer>
  )
}
