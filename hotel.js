function hostingOnePeople() {

    nomeHospede = prompt("Informe o nome do hospede responsável: ");

    let aprove;
    let totalValueHotelOne;
    let valueDailyOne = parseFloat(prompt("Insira o valor da diária"));
    do {
        if (valueDailyOne < 0) {
            alert("Valor inválido")
            valueDailyOne = parseFloat(prompt("Insira novamente o valor da diária"));
            aprove = true;
        } else { aprove = false }
    } while (aprove)

    let days = parseFloat(prompt("Insira a quantidade de dias"));
    do {
        if (days < 0 || days > 30) {
            alert("Valor inválido")
            days = parseFloat(prompt("Agora insira novamente a quantidade de dias"));
            aprove = true;
        } else { aprove = false }
    } while (aprove)

    totalValueHotelOne = valueDailyOne * days;

    do {
        let confirmHosting = prompt(`${nomeUser} o valor de ${days} dias de hospedagem é de R$${totalValueHotelOne.toFixed(2)} - ${nomeHospede} deseja confirmar a hospedagem S/N`);

        if (confirmHosting == "S") {
            alert(`${nomeUser}, reserva efetuada para ${nomeHospede}. O valor total é de R$${totalValueHotelOne}.`);
            aprove = false;
        } else if (confirmHosting == "N") {
            alert(`${nomeUser}, reserva não efetuada.`);
            aprove = false;
        } else {
            alert('Valor inválido, para reservar digite S ou para cancelar digite N, apenas um desses dois!!')
            aprove = true;
        }
    } while (aprove)
}

// Função para reservar hotel, validar preço e cadastrar hospedes.
function hostingFamily() {
    nomeHospede = prompt("Informe o nome do hospede responsável: ");

    let aprove;
    let totalValueHotel = 0;
    let valueDaily = parseFloat(prompt("Insira o valor a diária"));
    let half = valueDaily / 2;

    let hostName;
    let age;
    let freePass = 0;
    let paysHalf = 0;

    do {
        if (valueDaily < 0) {
            alert("Valor inválido")
            valueDaily = parseFloat(prompt("Insira novamente o valor da diária"));
            aprove = true;
        } else { aprove = false }
    } while (aprove)

    let totalGuests = 1;

    do {
        aprove = true;
        hostName = prompt("Digite o nome do Hóspede ou caso deseja parar de inserir Hóspedes digite PARE");
        if (hostName == "PARE") {
            aprove = false;
        } else {
            hostList.push(hostName);
            age = parseInt(prompt("Qual a idade do Hóspede:"));
            ageList.push(age);
            if (age < 6) {
                freePass++;
                alert(`${hostName} cadastrada(o) com sucesso. ${hostName} possui gratuidade`);

            } else if (age > 60) {
                paysHalf++;
                alert(`${hostName} cadastrada(o) com sucesso. ${hostName} paga meia`);
                totalValueHotel = + half;
            } else {
                alert(`${hostName} cadastrada(o) com sucesso.`);
                totalGuests++;
            }
        }
    } while (aprove)

    if (paysHalf <= 0) {
        totalValueHotel = valueDaily * totalGuests;
    } else { totalValueHotel = totalValueHotel + valueDaily * totalGuests; }

    do {
        let confirmHosting = prompt(`${nomeUser} o valor total das hospedagens é: R$${totalValueHotel}; ${freePass} gratuidade(s); ${paysHalf} meia(s) - ${nomeHospede} deseja confirmar a hospedagem S/N`);

        if (confirmHosting == "S") {
            alert(`${nomeUser}, reserva efetuada para ${nomeHospede}. O valor total é de R$${totalValueHotel}.`);
            aprove = false;
        } else if (confirmHosting == "N") {
            alert(`${nomeUser}, reserva não efetuada.`);
            aprove = false;
        } else {
            alert('Valor inválido, para reservar digite S ou para cancelar digite N, apenas um desses dois!!')
            aprove = true;
        }
    } while (aprove)

    let menuAgain = parseInt(prompt("1)Consulte ou cadastre hóspedes"));

    switch (menuAgain) {
        case 1:
            consultGuests();
            break;
        default:
    }
}

// Função para consultar hospedes cadastrados na função "hostingFamily" e cadastrar novos hospedes.
function consultGuests() {
    function singUpGuests() {
        let newGuests;
        let newAge;
        let aprove;
        do {
            if (hostList.length >= 15) {
                alert(`Você já atingiu o número máximo de hóspedes que é ${hostList.length}`);
                aprove = false;
            } else {
                aprove = true;
                alert(`Você tem um total de ${hostList.length} hóspedes cadastrados e o máximo é 15`);
                alert("Para cadastrar novos hóspedes siga as próximas instruções");
                newGuests = prompt("Digite o nome do Hóspede ou caso deseja parar de inserir Hóspedes digite PARE");
                if (newGuests == "PARE") {
                    aprove = false;
                } else {
                    hostList.push(newGuests);
                    newAge = parseInt(prompt("Qual a idade do Hóspede:"));
                    ageList.push(newAge);
                    if (newAge < 6) {
                        alert(`${newGuests} cadastrada(o) com sucesso. ${newGuests} possui gratuidade`);
                    } else if (newAge > 60) {
                        alert(`${newGuests} cadastrada(o) com sucesso. ${newGuests} paga meia`);
                    } else {
                        alert(`${newGuests} cadastrada(o) com sucesso.`);
                    }
                }
            }
        } while (aprove)

    }
    function consult() {
        let hostConsult = prompt("Qual o nome do Hóspede?");

        if (hostList.includes(hostConsult)) {
            alert(`${hostConsult} foi encontrada(o)`);
        } else { alert(`${hostConsult} não foi encontrada(o)`); }

    }

    alert(`${nomeUser}, bem vindo a sessão de consulta e cadastro de hóspedes, a seguir selecione a operação que deseja realizar.`);

    let optionConsult = parseInt(prompt("1)Cadastrar Hóspede - 2)Consultar Hóspede - 3)Voltar para o menu inicial"));

    switch (optionConsult) {

        case 1:
            singUpGuests();
            break;
        case 2:
            consult();
            break;
        case 3:
            var option = parseInt(prompt("1)Hospedagem para uma pessoa só - 2)Hospedagem para Fámilia - 3)Consulte os hóspedes"));

            switch (option) {

                case 1:
                    hostingOnePeople();
                    break;
                case 2:
                    hostingFamily();
                    break;
                case 3:
                    consultGuests();
                    break;
                default:
            }
            break;
        default:
    }
}

// Função que calcula o valor de eventos por contratação de empresa
function events() {
    let valueWaiter = 10.50;
    let howManyWaiter;
    let eventHours;
    let totalValueEvent;
    alert(`${nomeUser}, bem vinda(o) ao ambiente de eventos :D, siga as próximas instruções`);

    let aprove;
    let aproveEvent;
    do {
        let companyOrHost = prompt(`${nomeUser} o cliente é empresa ? S ou N`);

        if (companyOrHost == "S") {
            aprove = false;
            let nameCompany = prompt("Insira o nome da empresa: ");
            let MasterCompany = prompt("Insira o nome do responsável pela reserva: ");
            eventHours = parseFloat(prompt("Qual a duração do evento em horas?"));
            howManyWaiter = parseInt(prompt("Quantos garçons serão necessários?"));

            totalValueEvent = eventHours * (valueWaiter * howManyWaiter);

            do {
                let confirmEvent = prompt(`${nomeUser} o valor total do evento com duração de ${eventHours}horas com ${howManyWaiter} garçons é de R$${totalValueEvent}, ${MasterCompany} deseja confirmar a hospedagem S/N ?`);

                if (confirmEvent == "S") {
                    alert(`${nomeUser}, reserva efetuada para a empresa ${nameCompany}-(Host contratante ${MasterCompany}) no valor total de R$${totalValueEvent}.`);
                    aproveEvent = false;
                } else if (confirmEvent == "N") {
                    alert(`${nomeUser}, reserva não efetuada.`);
                    aproveEvent = false;
                } else {
                    alert('Valor inválido, para reservar digite S ou para cancelar digite N, apenas um desses dois!!')
                    aproveEvent = true;
                }
            } while (aproveEvent)
        } else if (companyOrHost == "N") {
            aprove = false;
            let MasterEvent = prompt("Insira o nome do responsável pela reserva: ");
            eventHours = parseFloat(prompt("Qual a duração do evento em horas?"));
            howManyWaiter = parseInt(prompt("Quantos garçons serão necessários?"));

            totalValueEvent = eventHours * (valueWaiter * howManyWaiter);

            do {
                let confirmEvent = prompt(`${nomeUser} o valor total do evento com duração de ${eventHours}horas e um total de ${howManyWaiter} é de R$${totalValueEvent}, ${MasterEvent} deseja confirmar a hospedagem S/N ?`);

                if (confirmEvent == "S") {
                    alert(`${nomeUser}, reserva efetuada para o Host contratante ${MasterEvent} no valor total é de R$${totalValueEvent}.`);
                    aproveEvent = false;
                } else if (confirmEvent == "N") {
                    alert(`${nomeUser}, reserva não efetuada.`);
                    aproveEvent = false;
                } else {
                    alert('Valor inválido, para reservar digite S ou para cancelar digite N, apenas um desses dois!!')
                    aproveEvent = true;
                }
            } while (aproveEvent)

        } else {
            aprove = true;
            alert('Valor inválido, para configurar reserva para empresa "S" ou individual digite  "N", apenas um desses dois!!')
        }
    } while (aprove)
}
// Variável controla o nome de uma hospede solo e um hospede responável pela familia
let nomeHospede;

// Váriáveis para controlar o valor da diária de uma familia ou amigos
var valueDaily;
var totalValue;

// Variáveis para controlar cadastro de nome e idade dos hóspedes
var hostList = [];
var ageList = [];


while (true) {

    var nomeHotel = prompt("Qual é o nome do hotel?");

    var nomeUser = prompt("Me informe seu nome: ");
    var password = parseInt(prompt("Agora me informe sua senha: "));


    let attempt = 3;
    let aprovePassword; // A senha é 2678

    do {
        if (password == 2678) {
            aprovePassword = false;
            alert(`Bem vindo ao hotel ${nomeHotel}, ${nomeUser} é um imenso prazer ter você por aqui!!`);

            alert("A seguir, escolha a opção que deseja seguir");

            var option = parseInt(prompt("1)Hospedagem para uma pessoa são - 2)Hospedagem para Fámilia - 3)Consulte os hóspedes - 4)Eventos"));

            switch (option) {

                case 1:
                    hostingOnePeople();
                    break;
                case 2:
                    hostingFamily();
                    break;
                case 3:
                    consultGuests();
                    break;
                case 4:
                    events();
                default:
            }
        } else {
            password = parseInt(prompt(`Senha inválida, você só tem mais ${attempt} tentativas, digite novamente:`));
            attempt -= 1
            aprovePassword = true;
            if (attempt <= 0) {
                aprovePassword = false
            }
        }
    } while (aprovePassword);
    if (attempt <= 0) {
        alert(`${nomeUser} tentativas excedidas, para sua segurança encerraremos o programa.`);
        brea
    }
    let restart = prompt("Deseja voltar ao inicio ? se sim digite 'S' agora se deseja encerrar digite 'N' ");
    if (restart == "S") {
        alert("Otimo, vamos voltar para a pergunta inicial");
    } else {
        alert(`Até uma próxima ${nomeUser}`);
        break
    }
}

// Sempre que o programa encerrar essa mensagem deve aparcer "Muito obrigado e até logo, {nomeUser}." 