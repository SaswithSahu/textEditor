import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'

class App extends Component {
  state = {s1: false, s2: false, s3: false}

  boldIcon = () => {
    this.setState(prestate => ({s1: !prestate.s1}))
  }

  italicIcon = () => {
    this.setState(prestate => ({s2: !prestate.s2}))
  }

  decorationIcon = () => {
    this.setState(prestate => ({s3: !prestate.s3}))
  }

  render() {
    const {s1, s2, s3} = this.state
    console.log(s3)

    return (
      <div className="container-1">
        <div className="container-2">
          <div className="container-3">
            <h1 className="head">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="container-4">
            <ul className="container-5">
              <li>
                <button
                  type="button"
                  data-testid="bold"
                  onClick={this.boldIcon}
                  className="button"
                >
                  <VscBold className={s1 ? 'icon-active' : 'icon'} />
                </button>
              </li>

              <li>
                <button
                  type="button"
                  data-testid="italic"
                  onClick={this.italicIcon}
                  className="button"
                >
                  <GoItalic className={s2 ? 'icon-active' : 'icon'} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="underline"
                  onClick={this.decorationIcon}
                  className="button"
                >
                  <AiOutlineUnderline className={s3 ? 'icon-active' : 'icon'} />
                </button>
              </li>
            </ul>
            <textarea
              cols="40"
              style={{
                textDecoration: `${s3 ? 'underline' : ''}`,
                fontStyle: `${s2 ? 'italic' : 'normal'}`,
                fontWeight: `${s1 ? 'bold' : 'normal'}`,
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
