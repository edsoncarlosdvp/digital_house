
const tic_tac_toe = {
    board: ['','','','','','','','',''],
    simbols: {
        options: ['X', 'O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0)
        }
    },
    
    container_element: null,
    game_over: false,
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
        this.container_element = container
    },

    make_play: function(position){
        if(this.game_over) return false
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options [this.simbols.turn_index]
            this.draw();
            let winning_sequences_index = this.check_winning_sequences (this.simbols.options [this.simbols.turn_index])
            if(winning_sequences_index >= 0){
                this.game_is_over()
            }else{
                this.simbols.change()
            }
            return true
        }else{
            return false
        }
    },

    game_is_over: function(){
        this.game_over = true
        console.log('GAME OVER')
        let result = document.querySelector('#result')
        let btnReset = document.querySelector('.btnReset')
        result.innerHTML = 'GAME OVER'
        // result.innerHTML = "<button class='btnReset' onclick='tic_tac_toe.start()'>Reset</button>"
    },

    check_winning_sequences: function(simbol){
        for(i in this.winning_sequences){
            if(
                this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol){
                    console.log('Sequência vencedora: ' + i)
                    return i
                }
        }
        return -1
    },

    start: function(){
        this.board.fill('')
        this.draw()
        this.game_over = false
    },

    draw: function(){
        let content = ''

        for (i in this.board){
            content += '<div onclick="tic_tac_toe.make_play('+ i +')">' + this.board[i] + '</div>'
        }
        this.container_element.innerHTML = content
    }
}