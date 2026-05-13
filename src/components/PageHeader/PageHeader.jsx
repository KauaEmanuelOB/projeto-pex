import './PageHeader.css'

function PageHeader({titulo}) {

  return (
    <section className='page-header'>
      <h1>{titulo}</h1>
    </section>
  )
}

export default PageHeader