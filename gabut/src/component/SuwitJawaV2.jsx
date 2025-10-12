import { useEffect,useState } from "react";

const SuwitJawaV2 = () => {
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);

  const getPilihanComputer = () => {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
  };

  const getHasil = (comp, player) => {
    if (player == comp) return "SERI!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
    if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
    return "memasukkan pilihan yang salah!";
  };

  const putar = () => {
    const imgComputer = document.getElementById("img-komputer");
    const gambar = ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
      if (new Date().getTime() - waktuMulai > 1000){
        clearInterval
        return;
      }

      imgComputer.setAttribute("src", "/img/" + gambar[i++] + ".png");
      if (i === gambar.length) i = 0;
    }, 100);
  };

  useEffect(() => {
    const pilihan = document.querySelectorAll("li img");

    const handlePick = (event) => {
      const pilihancomputer = getPilihanComputer();
      const pilihanPlayer = event.target.id;
      const hasil = getHasil(pilihancomputer, pilihanPlayer);

      putar();

      setTimeout(() => {
          const imgComputer = document.getElementById("img-komputer");
          imgComputer.setAttribute("src", "/img/" + pilihancomputer + ".png");
    
          const info = document.getElementById("info");
          info.innerHTML = hasil;
          
        if (hasil === "MENANG!") {
          setScorePlayer((prev) => prev + 1);
        } else if (hasil === "KALAH!") {
          setScoreComputer((prev) => prev + 1);
        }else{
            setScoreComputer((prev) => prev + 0);
            setScorePlayer((prev) => prev + 0);
        }

      }, 1000);

    };

    pilihan.forEach((pil) => {
      pil.addEventListener("click", handlePick);
    });

    return () => {
      pilihan.forEach((pil) => {
        pil.removeEventListener("click", handlePick);
      });
    };
  }, []);

  //   const handleGajahClick = (event) => {
  //     const pilihancomputer = getPilihanComputer();
  //     const pilihanPlayer = event.target.id
  //     const hasil = getHasil(pilihancomputer,pilihanPlayer)

  //     const imgComputer = document.getElementById("img-komputer")
  //     imgComputer.setAttribute("src", '/img/' + pilihancomputer + '.png')
  //     const info = document.getElementById("info")
  //     info.innerHTML = hasil
  //   }

  //   const handleOrangClick = (event) => {
  //     const pilihancomputer = getPilihanComputer();
  //     const pilihanPlayer = event.target.id
  //     const hasil = getHasil(pilihancomputer,pilihanPlayer)

  //     const imgComputer = document.getElementById("img-komputer")
  //     imgComputer.setAttribute("src", '/img/' + pilihancomputer + '.png')
  //     const info = document.getElementById("info")
  //     info.innerHTML = hasil
  //   }

  //   const handleSemutClick = (event) => {
  //     const pilihancomputer = getPilihanComputer();
  //     const pilihanPlayer = event.target.id
  //     const hasil = getHasil(pilihancomputer,pilihanPlayer)

  //     const imgComputer = document.getElementById("img-komputer")
  //     imgComputer.setAttribute("src", '/img/' + pilihancomputer + '.png')
  //     const info = document.getElementById("info")
  //     info.innerHTML = hasil
  //   }

  return (
    <div
      id="app"
      className="min-h-screen bg-[url('/img/bg.png')] bg-cover font-sans text-center text-gray-100"
    >
      <h1
        id="title"
        className="text-5xl font-extrabold mt-10 uppercase text-[#e7e7e7] drop-shadow-[2px_2px_0_#333]"
      >
        Suwit Jawa v2.0
      </h1>

       <div className="flex justify-center gap-10 mt-6 text-2xl font-bold">
        <div className="bg-sky-500 px-6 py-3 rounded-xl shadow-lg">
          🧠 Komputer: <span>{scoreComputer}</span>
        </div>
        <div className="bg-lime-500 px-6 py-3 rounded-xl shadow-lg">
          🙋‍♂️ Player: <span>{scorePlayer}</span>
        </div>
      </div>

      <div id="container" className="w-[600px] mx-auto mt-8 relative p-5">
        <div
          id="area-komputer"
          className="w-[560px] h-[250px] mx-auto rounded-t-[40px] bg-gradient-to-b from-sky-300 to-sky-600 flex items-center justify-center"
        >
          <img
            id="img-komputer"
            src="/img/gajah.png"
            alt="komputer"
            className="w-[130px] h-[130px] rounded-full"
          />
        </div>

        <div
          id="info"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[60px] border-[5px] border-pink-400 bg-white rounded-[30px] flex items-center justify-center text-pink-400 text-2xl font-semibold shadow"
        ></div>

        <div
          id="area-player"
          className="w-[560px] h-[250px] mx-auto rounded-b-[40px] bg-gradient-to-b from-lime-200 to-lime-500 flex items-center justify-center"
        >
          <ul id="player-choices" className="flex gap-8">
            <li>
              <img
                id="gajah"
                src="/img/gajah.png"
                alt="gajah"
                className="w-[130px] h-[130px] rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_limegreen] active:translate-y-[2px] transition-all duration-300"
              />
            </li>
            <li>
              <img
                id="orang"
                src="/img/orang.png"
                alt="orang"
                className="w-[130px] h-[130px] rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_limegreen] active:translate-y-[2px] transition-all duration-300"
              />
            </li>
            <li>
              <img
                id="semut"
                src="/img/semut.png"
                alt="semut"
                className="w-[130px] h-[130px] rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_limegreen] active:translate-y-[2px] transition-all duration-300"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuwitJawaV2;
