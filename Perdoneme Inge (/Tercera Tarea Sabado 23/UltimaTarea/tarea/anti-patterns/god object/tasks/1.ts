

class MovieManager {
    movies: any[] = [];


    addMovie(movie: any) {
        this.movies.push(movie);
    }
}


class SnackManager {
    snacks: any[] = [];


    buySnack(snack: any) {
        this.snacks.push(snack);
    }
}


class TicketManager {
    tickets: any[] = [];


    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }
}


class EmployeeManager {
    employees: any[] = [];


    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}


const movieManager = new MovieManager();
const snackManager = new SnackManager();
const ticketManager = new TicketManager();
const employeeManager = new EmployeeManager();


movieManager.addMovie({ title: "peli 1", duration: 120 });
snackManager.buySnack({ name: "Pipocp", price: 5 });
ticketManager.buyTicket({ movie: "Movie 1", seat: "A1" });
employeeManager.hireEmployee({ name: "All", position: "Cart" });


















class Cinema {
    movies: any[] = [];
    snacks: any[] = [];
    tickets: any[] = [];
    employees: any[] = [];

    // Métodos relacionados con películas
    addMovie(movie: any) {
        this.movies.push(movie);
    }

    // Métodos relacionados con snacks
    buySnack(snack: any) {
        this.snacks.push(snack);
    }

    // Métodos relacionados con entradas
    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }

    // Métodos relacionados con empleados
    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}