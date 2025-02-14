// Animation Timeline
const animationTimeline = () => {
  // Get the audio element by its ID
  // const audio = document.getElementById("backgroundAudio");

  // // Play the audio when the animation starts
  // audio.play();

    window.onload = function() {
    var context = new AudioContext();
    // Setup audio nodes...
  }
  
  document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });
  
  // Split chars that need to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split(" ")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split(" ")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.3, { // Increased the time
    visibility: "visible",
  })
    .from(".one", 1.5, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .from(".two", 1.0, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .to(".one", 1.5, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .to(".two", 1.5, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .from(".three", 1.5, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .to(".three", 1.5, { // Increased the time
      opacity: 0,
      y: 10,
    })
    .from(".four", 1.5, { // Increased the time
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 1.0, { // Increased the time
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.0, { // Increased the time
        visibility: "visible",
      },
      0.1
    )
    .to(".fake-btn", 0.2, { // Increased the time
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      1.0, { // Increased the time
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 1.5, ideaTextTrans) // Increased the time
    .to(".idea-1", 1.5, ideaTextTransLeave, "+=2") // Increased the time
    .from(".idea-2", 1.5, ideaTextTrans) // Increased the time
    .to(".idea-2", 1.5, ideaTextTransLeave, "+=2") // Increased the time
    .from(".idea-3", 1.5, ideaTextTrans) // Increased the time
    .to(".idea-3 strong", 1.0, { // Increased the time
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 1.5, ideaTextTransLeave, "+=2") // Increased the time
    .from(".idea-4", 1.5, ideaTextTrans) // Increased the time
    .to(".idea-4", 1.5, ideaTextTransLeave, "+=2") // Increased the time
    .from(
      ".idea-5",
      1.5, { // Increased the time
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1"
    )
    .to(
      ".idea-5 span",
      1.0, { // Increased the time
        rotation: 90,
        x: 8,
      },
      "+=0.5"
    )
    .to(
      ".idea-5",
      1.5, { // Increased the time
        scale: 0.2,
        opacity: 0,
      },
      "+=3"
    )
    .staggerFrom(
      ".idea-6 span",
      1.5, { // Increased the time
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.3
    )
    .staggerTo(
      ".idea-6 span",
      1.5, { // Increased the time
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.3,
      "+=2"
    )
    .staggerFromTo(
      ".baloons img",
      3.0, { // Increased the time
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.4
    )
    .from(
      ".girl-dp",
      1.5, { // Increased the time
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 1.5, { // Increased the time
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      1.5, { // Increased the time
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.2
    )
    .staggerFromTo(
      ".wish-hbd span",
      1.5, { // Increased the time
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.2,
      "party"
    )
    .from(
      ".wish h5",
      1.5, { // Increased the time
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      2.5, { // Increased the time
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.5,
      },
      0.4
    )
    .to(".six", 1.0, { // Increased the time
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1.5, ideaTextTrans, 1.5)
    .to(
      ".last-smile",
      1.0, { // Increased the time
        rotation: 90,
      },
      "+=2"
    );

  // Stop audio when the animation ends
  tl.eventCallback("onComplete", () => {
    audio.pause(); // Pause the audio at the end of the animation
    audio.currentTime = 0; // Optionally reset the audio to the beginning
  });

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
    audio.play(); // Restart the audio when the animation is restarted
  });
};

animationTimeline();
