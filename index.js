const burger = document.querySelector('.bur-im')
const burgerBlock = document.querySelector('.burger-block')
const iconX = document.querySelector('.icon-x-block')
const openQ = document.querySelectorAll('.open-q')
const btn_o = document.querySelectorAll('.btn-0')
const questionBlock = document.querySelectorAll('.bor-qtoa')


burger.addEventListener('click', () => {
	burgerBlock.classList.remove('none')
	burger.classList.add('none')
})

iconX.addEventListener('click', () => {
	burgerBlock.classList.add('none')
	burger.classList.remove('none')
})

for(let i = 0; i < openQ.length; i++){
	openQ[i].addEventListener('click', () => {
		if(btn_o[i].ariaExpanded == 'true'){
			questionBlock[i].style.borderRadius ='14px 14px 0 0'
		}
		if(btn_o[i].ariaExpanded == 'false'){
			questionBlock[i].style.borderRadius ='14px'
			questionBlock[i].style.transition = '1s'
		}
	})
}

//

const day = document.querySelector('.day')
const hrs = document.querySelector('.hrs')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

// таймер обратного отсчета 
const currentYear = new Date().getFullYear()


// Тут можно изменить дату акции
//currentYear - это текуший год
const newYear = new Date(`29 Jan ${currentYear} 00:00:00`)


function countdownTimer(){
	const todayDate = Date. now ()

	//получим разницу между новым годом и текущей датой Unix
	const gap = newYear - todayDate

	const d = Math. floor (gap / 1000 / 60 / 60 / 24)
	const h = Math. floor ((gap / 1000 / 60 / 60) % 24)
	const m = Math. floor ((gap / 1000 / 60) % 60)
	const s = Math. floor ((gap / 1000) % 60 )

	day.innerHTML = d < 10  ? "0" + d : d
	hrs.innerHTML = h < 10  ? "0" + h : h
	min.innerHTML = m < 10  ? "0" + m : m
	sec.innerHTML = s < 10  ? "0" + s : s
}

setInterval(countdownTimer, 1000)
 

