import './Container.css'

const Container = (props) => {
  return (
    <div className="container">
      <div className="pag-cont">
      {props.children}
      </div>
    </div>
  )
}

export default Container