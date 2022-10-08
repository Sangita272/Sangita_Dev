import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

function Crud() {
  const [Data, setData] = useState([]);
  const [RowItem, SetRowItem] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [viewAdd, setViewAdd] = useState(false);
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const handleClose = () => {
    SetEditShow(false);
  };


  const handleAdd = () => {
    setViewAdd(true);
  };

  const getVideo = () => {
    axios({
      url: "http://ceo.iosx.in/api/video/list",
      method: "POST",
      headers: {
        "authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmM2RiOGM5MDk3MGJmMTVjZjhlMjAiLCJuYW1lIjoiQXlhbmVzaCIsImVtYWlsIjoiYXlhbmVzaGNvbXBhbnlAbWFpbGluYXRvci5jb20iLCJpbWFnZSI6bnVsbCwiYWNjZXB0X3Rlcm1zIjp0cnVlLCJ0eXBlIjoiY29tcGFueSIsImRlc2NyaXB0aW9uIjpudWxsLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiY291bnRyeSI6bnVsbCwibGFzdF9sb2dpbiI6IjIwMjItMDMtMTRUMTM6MDY6MjAuNDkzWiIsImNyZWF0ZWRfYnkiOm51bGwsInVwZGF0ZWRfYnkiOm51bGwsImRlbGV0ZWRfYnkiOm51bGwsIl9fdiI6MCwiaWF0IjoxNjQ3MjYzMjIzfQ.rP6WJOyefQss02jDKiZvAMv7PaaaE6lnDVzXTT4b5_I`,
        "Content-Type": 'application/json'   
    },
      data: {
        keyword: "",
        limit: "",
        offset: "",
        dateRange: {
          start: "",
          end: "",
        },
        type: "",
        category_id: "",
        featured: "",
        status: true,
        tag: "",
      },
    })
      .then((res) => {
        if (res && res.data.status) {
          setData(res.data.data);
        }
      })

      .catch((err) => {
        console.log("err===", err);
      });
  };

  const handleEdit = () => {
    axios({
      url: `http://ceo.iosx.in/api/video/edit`,
      method: "POST",
      headers: {
        "authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmM2RiOGM5MDk3MGJmMTVjZjhlMjAiLCJuYW1lIjoiQXlhbmVzaCIsImVtYWlsIjoiYXlhbmVzaGNvbXBhbnlAbWFpbGluYXRvci5jb20iLCJpbWFnZSI6bnVsbCwiYWNjZXB0X3Rlcm1zIjp0cnVlLCJ0eXBlIjoiY29tcGFueSIsImRlc2NyaXB0aW9uIjpudWxsLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiY291bnRyeSI6bnVsbCwibGFzdF9sb2dpbiI6IjIwMjItMDMtMTRUMTM6MDY6MjAuNDkzWiIsImNyZWF0ZWRfYnkiOm51bGwsInVwZGF0ZWRfYnkiOm51bGwsImRlbGV0ZWRfYnkiOm51bGwsIl9fdiI6MCwiaWF0IjoxNjQ3MjYzMjIzfQ.rP6WJOyefQss02jDKiZvAMv7PaaaE6lnDVzXTT4b5_I`,
        "Content-Type": 'application/json'  
    },
      data: {
        id: RowItem._id,
        name: name,
        video_type: "youtube",
        tags: ["Java", "Java For beginner"],
        link: link,
        category_id: "623c6307067291eb399045d5",
        description: description,
      },
    })
      .then((res) => {
        if (res && res.data.status) {
          getVideo();
          SetEditShow(false);
          setName("");
          setDescription("");
          setLink("");
        //   console.log("data====", res.data.data);
        }
      })

      .catch((err) => {
        console.log("err===", err);
      });
  };

  const addVideo = () => {
    axios({
      url: "http://ceo.iosx.in/api/video/add",
      method: "POST",
      headers: {
        "authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmM2RiOGM5MDk3MGJmMTVjZjhlMjAiLCJuYW1lIjoiQXlhbmVzaCIsImVtYWlsIjoiYXlhbmVzaGNvbXBhbnlAbWFpbGluYXRvci5jb20iLCJpbWFnZSI6bnVsbCwiYWNjZXB0X3Rlcm1zIjp0cnVlLCJ0eXBlIjoiY29tcGFueSIsImRlc2NyaXB0aW9uIjpudWxsLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiY291bnRyeSI6bnVsbCwibGFzdF9sb2dpbiI6IjIwMjItMDMtMTRUMTM6MDY6MjAuNDkzWiIsImNyZWF0ZWRfYnkiOm51bGwsInVwZGF0ZWRfYnkiOm51bGwsImRlbGV0ZWRfYnkiOm51bGwsIl9fdiI6MCwiaWF0IjoxNjQ3MjYzMjIzfQ.rP6WJOyefQss02jDKiZvAMv7PaaaE6lnDVzXTT4b5_I`,
        "Content-Type": 'application/json'  
    },
      data: {
        name: name,
        video_type: "youtube",
        tags: ["React", "React For beginner"],
        link: link,
        category_id: "623c6307067291eb399045d5",
        description: description,
      },
    })
      .then((res) => {
        if (res && res.data.status) {
         getVideo()
         setViewAdd(false);
         setName("");
         setLink("");
         setDescription("");
        }
      })

      .catch((err) => {
        console.log("err===", err);
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <>
     
      <div>
        <Button
          onClick={handleAdd}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          Add Videos
        </Button>
        {Data.map((item, index) => {
          return (
            <>
              <h1>The Videos:</h1>

              <br />
              <div key={item._id}>
                <center>
                  <ReactPlayer
                    url={item.link}
                  />
                </center>
                <p>{item.name}</p>
                <p>{item.alias}</p>
                <p>{item.description}</p>
                <br />
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => {
                    handleEditShow(
                      SetRowItem(item),
                      setName(item.name),
                      setDescription(item.description),
                      setLink(item.link)
                    );
                  }}
                >
                  Edit
                </Button>
                |
              </div>
            </>
          );
        })}

        {/* for edit */}
        <Modal
          show={ViewEdit}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label style={{marginLeft:10, marginRight:10}}>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="please enter the video name"
                defaultValue={RowItem.name}
              />
              <br/>
              <label style={{marginLeft:10, marginRight:10}}>Link</label>
              <input
                type="text"
                onChange={(e) => setLink(e.target.value)}
                placeholder="please enter the video link"
                defaultValue={RowItem.link}
              />
              <br/>
              <label style={{marginLeft:10, marginRight:10}}>Description</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="please enter the video description"
                defaultValue={RowItem.description}
              />
              <br/>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Videos
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        {/* for add */}
        <Modal
          show={viewAdd}
          onHide={() => setViewAdd(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label style={{marginLeft:10, marginRight:10}}>Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="please enter the video name"
                defaultValue={name}
              />
              <br/>
              <br/>
              <label style={{marginLeft:10, marginRight:10}}>Link</label>
              <input
                type="text"
                onChange={(e) => setLink(e.target.value)}
                placeholder="please enter the video link"
                defaultValue={link}
              />
              <br/>
              <br/>
              <label style={{marginLeft:10, marginRight:10}}>Description</label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="please enter the video description"
                defaultValue={description}
              />
              <br/>
              <br/>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={addVideo}
              >
                Add Videos
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Crud;
