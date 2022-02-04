
              class  Clock {
                constructor(timer) {
                    this._timer = timer;
                    this.$clockContainer = document.createElement('div');
                    this.$timer = document.createElement('h2');
                    this.$timer.innerText = this._timer;
                    
                    this.$startBtn = document.createElement('button');// this.$startBtn === <button>Start<button>
                    this.$startBtn.innerText = 'Start';
                    this.$startBtn.addEventListener('click', this.start)

                    this.$pauseBtn = document.createElement('button');
                    this.$pauseBtn.innerText = 'Pause';

                    this.$stopBtn = document.createElement('button');
                    this.$stopBtn.innerText = 'Stop';

                }
                start= () => {
                    setInterval(() => {
                        this._timer += 1;
                        this.$timer.innerText = this._timer;
                    }, 1000);  // this kh trỏ vào Clock cách giải quết đùng arrow function
                               // vì arrow function kh tạo ra context mới nên this sẽ trỏ vào this ở phía bên ngoài (đó là Clock)
                }
                render() {
                   this.$clockContainer.appendChild(this.$timer);
                   this.$clockContainer.appendChild(this.$startBtn);
                   this.$clockContainer.appendChild(this.$pauseBtn);
                   this.$clockContainer.appendChild(this.$stopBtn);
                return this.$clockContainer
                
                  
                }
       }
       const rootElm = document.querySelector('#root');
  
       const myClock = new Clock(0);

       rootElm.appendChild(myClock.render());
        

