import React, { useState } from "react";
import PostCard from "./components/PostCard";
import { RiMenuLine, RiAddLine } from "@remixicon/react";
import Form from "./components/Form";

const App = () => {
  const [demo, setDemo] = useState([
    {
      id: 1,
      username: "@alex_vibe",
      profileImg:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
      location: "Berlin, Germany",
      postImg:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      likes: "245",
      comments: "187",
      shares: "850",
      caption: "Living in the future of tech. Minimalism is the key.",
      tags: ["#minimal", "#tech"],
    },

    {
      id: 2,
      username: "@dev_vishnu",
      profileImg:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      location: "Tokyo, Japan",
      postImg:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",

      likes: "1432",
      comments: "56",
      shares: "72",
      caption: "Midnight coding sessions hitting differently with the M4 chip.",
      tags: ["#coding", "#tokyo"],
    },
    {
      id: 3,
      username: "@marco_arch",
      profileImg:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
      location: "Milan, Italy",
      postImg:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      likes: "8848",
      comments: "430",
      shares: "210",
      caption: "Geometry speaks louder than words. Modernism in every corner.",
      tags: ["#architecture", "#design"],
    },
    {
      id: 4,
      username: "@nature_core",
      profileImg:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      location: "Bali, Indonesia",
      postImg:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop",
      likes: "1273",
      comments: "890",
      shares: "108",
      caption: "Digital nomad life is all about the view from your 'office'.",
      tags: ["#nomad", "#travel"],
    },
    {
      id: 5,
      username: "@neon_coder",
      profileImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      location: "London, UK",
      postImg:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      likes: "671",
      comments: "199",
      shares: "900",
      caption:
        "Debugging is just being the detective in a crime movie where you are also the murderer.",
      tags: ["#javascript", "#mern"],
    },
  ]);
  console.log(demo);
  const [toggleForm, setToggleForm] = useState(false);
  const [postEdit, setPostEdit] = useState(null);

  let handleEdit = (data) => {
    setPostEdit(data);
  };

  return (
    <div className="app-wrapper min-h-screen w-screen bg-gray-100 text-gray-800 flex flex-col items-center p-2 rounded-xl">
      {toggleForm ? (
        <Form
          setOption={setToggleForm}
          setDemo={setDemo}
          setToggleForm={setToggleForm}
          demo={demo}
          postEdit={postEdit}
          setPostEdit={setPostEdit}
        />
      ) : (
        <div className="app-container max-w-xs w-full h-full p-3 flex flex-col gap-5  rounded-xl">
          <header className="header-wrapper w-full h-10 p-1 flex items-center justify-between  text-[#3E65FF] rounded-xl ">
            <div className="header-content-wrapper flex items-center justify-center gap-2">
              <RiMenuLine size={36} />
              <div className="logo-container capitalize text-2xl font-semibold">
                curator
              </div>
            </div>
            <div className="header-cta-wrapper">
              <button
                onClick={() => setToggleForm((prev) => !prev)}
                className="cta header-cta bg-[#3E65FF] text-white text-xl rounded-full p-0.5 flex items-center justify-center gap-1"
              >
                <RiAddLine size={26} />
              </button>
            </div>
          </header>
          <div className="post-card-wrapper w-full p-1 flex flex-col gap-5 rounded-xl">
            {demo.map((data) => {
              return (
                <PostCard
                  data={data}
                  setDemo={setDemo}
                  key={data.id}
                  handleEdit={handleEdit}
                  setToggleForm={setToggleForm}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
