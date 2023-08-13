import React from "react";
import { Link } from "react-router-dom";
import "./Gdcss.css";

const Gd = () => {
  return (
    <main class="content ">
      <div class="container p-0">
        <h1 class="h3 mb-3">Group Discussion</h1>
        <div class="card border-info">
          <div class="row g-0">
            <div class="col-12 col-lg-5 col-xl-3 border">
              <div class="px-4 d-none d-md-block">
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1">
                    <input
                      type="text"
                      class="form-control border-info my-3"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
              <div className="mx-4">
                {/* <button> */}
                  <Link
                    className="btn btn-primary btn-lg mx-0 mt-3 p-2 d-flex justify-content-center"
                    to="/newtopic"
                  >
                    {" "}
                   Start New Group Discussion
                  </Link>
                {/* </button> */}


              </div>


              <div className="p-2 m-3 ">
                <div>
                  <p> <b>Active Discussion</b></p>
                </div>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-bottom mb-3"
                >
                  {/* <div class="badge bg-success float-right">5</div> */}
                  <div class="d-flex align-items-start mb-2">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                      class="rounded-circle mr-2"
                      alt="Vanessa Tucker"
                      width="40"
                      height="40"
                    />
                    <div class="flex-grow-1 px-2">
                      Computer Engineering
                      <div class="small d-flex justify-content-between">
                        <span class="fa fa-circle chat-online"> Online</span>
                        <span class="mx-3">  participants: 4</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item  list-group-item-action  border-bottom mb-3"
                >
                  {/* <div class="badge bg-success float-right">2</div> */}
                  <div class="d-flex align-items-start mb-2">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      class="rounded-circle mr-6"
                      alt="William Harris"
                      width="40"
                      height="40"
                    />
                    <div class="flex-grow-1 px-2">
                      Civil engineering
                      <div class="small d-flex justify-content-between">
                        <span class="fa fa-circle chat-online"> Online</span>
                        <span class="mx-3"> participants: 2</span>
                      </div>
                    </div>
                  </div>
                </a>
                <div>
                  <p> <b>unactive Discussion</b></p>
                </div>
                <a
                  href="#"
                  class="list-group-item list-group-item-action mb-3 border-bottom"
                >
                  <div class="d-flex align-items-start mb-2">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      class="rounded-circle mr-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div class="flex-grow-1 px-2">
                      Developing
                      <div class="small d-flex justify-content-between">
                        <span class="fa fa-circle chat-offline"> Offline</span>
                        <span class=" mx-3"> participants: 0</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <hr class="d-block d-lg-none mt-1 mb-0" />
            </div>
            <div class="col-12 col-lg-7 col-xl-9 ">
              <div class="py-2 px-4 border-bottom d-none d-lg-block">
                <div class="d-flex align-items-center py-1">
                  <div class="position-relative">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      class="rounded-circle mr-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                  </div>
                  <div class="flex-grow-1 pl-3 px-2">
                    <strong> Computer Engineering </strong>
                    <div class="text-muted small">
                      <em>Typing...</em>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary btn-lg p-2 m-2 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-phone feather-lg"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </button>
                    <button class="btn btn-info btn-lg m-2 mr-1 px-3 d-none d-md-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-video feather-lg"
                      >
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </button>
                    <button class="btn btn-light border btn-lg px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-more-horizontal feather-lg"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="position-relative">
                <div class="chat-messages p-4">
                  <div class="chat-message-right  pb-4">
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        class="rounded-circle mr-1"
                        alt="Chris Wood"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap d-flex justify-content-center">
                        You
                      </div>
                      <div class="text-muted small text-nowrap ">2:33 am</div>
                    </div>
                    <div class="flex-shrink-1 bg-info rounded py-2 px-3 m-3">
                      <div class="font-weight-bold mb-1">You</div>
                      Lorem ipsum dolor sit amet, vis erat denique in, dicunt
                      prodesset te vix.
                    </div>
                  </div>

                  <div class="chat-message-left pb-4">
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        class="rounded-circle mr-1"
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap d-flex justify-content-center">
                        User 1
                      </div>
                      <div class="text-muted small text-nowrap ">2:34 am</div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                      <div class="font-weight-bold mb-1">User 1</div>
                      <div>
                        Sit meis deleniti eu, pri vidit meliore docendi ut, an
                        eum erat animal commodo.
                      </div>
                    </div>
                  </div>

                  {/* <div class="chat-message-right mb-4">
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        class="rounded-circle mr-1"
                        alt="Chris Wood"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap m-2 justify-content-center">
                        You
                      </div>
                      <div class="text-muted small text-nowrap mt-2">
                        2:35 am
                      </div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                      <div class="font-weight-bold mb-1">You</div>
                      Cum ea graeci tractatos.
                    </div>
                  </div> */}

                  <div class="chat-message-left pb-4">
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                        class="rounded-circle mr-1 "
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap d-flex justify-content-center">
                        User 2
                      </div>
                      <div class="text-muted small text-nowrap ">2:36 am</div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                      <div class="font-weight-bold mb-1">User 2</div>
                      Sed pulvinar, massa vitae interdum pulvinar, risus lectus
                      porttitor magna, vitae commodo lectus mauris et velit.
                      Proin ultricies placerat imperdiet. Morbi varius quam ac
                      venenatis tempus.
                    </div>
                  </div>

                  <div class="chat-message-left pb-4">
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        class="rounded-circle mr-1"
                        alt="Sharon Lessman"
                        width="40"
                        height="40"
                      />
                      <div class="text-muted small text-nowrap d-flex justify-content-center">
                        User 3
                      </div>
                      <div class="text-muted small text-nowrap ">2:44 am</div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                      <div class="font-weight-bold mb-1">User 3</div>
                      Sit meis deleniti eu, pri vidit meliore docendi ut, an eum
                      erat animal commodo.
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-grow-0 py-3 px-4 border-top">
                <div class="input-group">
                  <div class="dropzone">
                    <i class="fa fa-paperclip h1  z-2">
                      <input type="file" className="upload-input bg-info z-1" />
                    </i>
                  </div>
                  <input
                    type="text"
                    class="form-control border-primary rounded-2"
                    placeholder="Type your message"
                  />
                  <button class="btn btn-primary btn-lg px-3">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gd;
