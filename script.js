setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
  
    hour.style.transform = `rotate(${30*htime + mtime/230*htime + mtime/2}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
    // { transform: rotate(25deg);}
  },1000);