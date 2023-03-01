// import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";
import "./CreateProposal.css"

const CreateProposal = ({ setModal }) => {
  // const navigate = useNavigate()
  const hiddenInputFile = useRef(null)
  const [image, setImage] = useState("")

  // for preview of file
  const loadfile = (event) => {
    var output = document.getElementById('output');
    var imgs = output.files.length;
    for (let i = 0; i < imgs; i++) {
      var urls = URL.createObjectURL(event.target.files[i]);
      document.getElementById("galeria").innerHTML += '<img src="' + urls + '">';
    }
  }
  const handleclick = () => {
    hiddenInputFile.current.click()
  }
  return (
    <div className="darkBg"
    //  onClick={()=>setModal(false)}
    >
      <div className="form-main">
        <div className="form-div-header">
          <div className="modalHeader">
            <h5 className="heading">Create Proposal</h5>
          </div>
          <button className="closeBtn"
            onClick={() => setModal(false)}
          >x</button>
        </div>
        <hr style={{ width: "94%", margin: "5px auto", opacity: "0.8" }} />
        <div className="proposal-container">
          <div className="centered">
            <div className="form-div1">
              {/* modal content */}
              <div className="modalContent">
                <div>
                  <label htmlFor="Event Name">Event Name</label><br />
                  <input type="text" style={{ width: '85%' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label htmlFor="">place of event</label><br />
                    <select id="code-select">
                      <option value="">Select</option>
                      <option value="">Delhi</option>
                      <option value="">Lucknow</option>
                      <option value="">Kanpur</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Proposal Type</label><br />
                    <select id="code-select">
                      <option value="">Select</option>
                      <option value="">Venue</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Event Type</label><br />
                    <select id="code-select">
                      <option value="">Select</option>
                      <option value="">Marrige</option>
                      <option value="">Birthday</option>
                      <option value="">Tonsure</option>

                    </select>
                  </div>
                  <div>
                    <label htmlFor="">Budget</label><br />
                    <input type="number" placeholder="00000" />
                  </div>
                  <div>
                    <label htmlFor="">From</label><br />
                    <input type="date" />
                  </div>
                  <div>
                    <label htmlFor="">To</label><br />
                    <input type="date" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Desription</label><br />
                  <textarea rows="4" placeholder="Desription" />
                </div>
              </div>
            </div>
            <div className="form-div2">
              <div>
                <div className="image-div">
                  <p>Images</p>
                  <button onClick={handleclick}>Add</button>
                </div>
                {/* <img id="output" /> */}
                <input id="output" className="fileinp" multiple type="file" accept="image/*" onChange={(e) => { loadfile(e) }} ref={hiddenInputFile} style={{ display: "none" }} />
                <div id="galeria">
                  <img src={require('../../assets/img1.jpg')} alt="" />
                </div>
              </div>
              <div>
                <label htmlFor="Event Name">Food preferences</label><br />
                <textarea rows="4" className="eve" placeholder="Food preferences" />
              </div>
              <div>
                <label htmlFor="Event Name">Events</label><br />
                <textarea rows="4" className="eve" placeholder="Events" />
              </div>
            </div>
          </div>
          <hr style={{ width: "94%", margin: "15px auto", opacity: "0.8" }} />
          <div>
            <button className="postbtn" type="submit">Post</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CreateProposal;
