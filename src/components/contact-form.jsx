import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

class ContactForm extends React.Component {
  render() {
    const formStyle = {
      textAlign: "left",
    }
    const buttonsStyle = {
      margin: "1rem",
      textAlign: "center",
    }
    return (
    <form 
      className="form"
      style={formStyle}
      method="post"
      action={this.props.action}
    >
      <div>
        <label>
          <FormattedMessage id="contact.fullname" /> 
          <input type="text" name="fullname" />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="contact.email" /> 
          <input type="email" name="_reply_to" />
        </label>
      </div>
      <div>
        <label>
          <FormattedMessage id="contact.message" />
          <textarea name="message" rows="5"></textarea>
        </label>
        </div>
      <ul style={buttonsStyle}>
        <li>
            <button type="submit" className="button special">
              <FormattedMessage id="contact.submit" />
            </button>
        </li>
      </ul>
    </form>
        
    )
  }
}

export default injectIntl(ContactForm)
