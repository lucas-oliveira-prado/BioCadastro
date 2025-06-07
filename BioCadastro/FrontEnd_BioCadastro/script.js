// Currently no JavaScript is needed as we're using separate pages for navigation
// This file is kept for future functionality 

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const sobreModal = document.getElementById('sobreModal');
    const contatoModal = document.getElementById('contatoModal');
    const animalModal = document.getElementById('animalModal');
    
    const btnSobre = document.getElementById('btnSobre');
    const btnContato = document.getElementById('btnContato');
    const btnAdicionarAnimal = document.getElementById('btnAdicionarAnimal');
    
    const closeSobre = document.getElementById('closeSobre');
    const closeContato = document.getElementById('closeContato');
    const closeAnimalModal = document.getElementById('closeAnimalModal');
    
    const contatoForm = document.getElementById('contatoForm');
    const animalModalTitle = document.getElementById('animalModalTitle');
    
    // Get all action buttons
    const editButtons = document.querySelectorAll('.botaoEditar');
    const vacinaButtons = document.querySelectorAll('.botaoVacina');
    const pesoButtons = document.querySelectorAll('.botaoPeso');

    // Open modals
    if (btnSobre) {
        btnSobre.addEventListener('click', (e) => {
            e.preventDefault();
            sobreModal.style.display = 'block';
        });
    }

    if (btnContato) {
        btnContato.addEventListener('click', (e) => {
            e.preventDefault();
            contatoModal.style.display = 'block';
        });
    }
    
    // Add Animal button functionality
    if (btnAdicionarAnimal) {
        btnAdicionarAnimal.addEventListener('click', () => {
            // Set modal title for adding new animal
            if (animalModalTitle) {
                animalModalTitle.textContent = 'Adicionar Animal';
            }
            
            // Show modal
            animalModal.style.display = 'block';
        });
    }
    
    // Edit animal buttons functionality
    if (editButtons) {
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Set modal title for editing
                if (animalModalTitle) {
                    animalModalTitle.textContent = 'Editar Animal';
                }
                
                // Show modal
                animalModal.style.display = 'block';
            });
        });
    }
    
    // Vaccine history button functionality
    if (vacinaButtons) {
        vacinaButtons.forEach(button => {
            button.addEventListener('click', () => {
                // In a real application, this would show vaccine history
                alert('Funcionalidade de histórico de vacinas será implementada em breve!');
            });
        });
    }
    
    // Weight history button functionality
    if (pesoButtons) {
        pesoButtons.forEach(button => {
            button.addEventListener('click', () => {
                // In a real application, this would show weight history
                alert('Funcionalidade de histórico de peso será implementada em breve!');
            });
        });
    }

    // Close modals with X button
    if (closeSobre) {
        closeSobre.addEventListener('click', () => {
            sobreModal.style.display = 'none';
        });
    }

    if (closeContato) {
        closeContato.addEventListener('click', () => {
            contatoModal.style.display = 'none';
        });
    }
    
    if (closeAnimalModal) {
        closeAnimalModal.addEventListener('click', () => {
            animalModal.style.display = 'none';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === sobreModal) {
            sobreModal.style.display = 'none';
        }
        if (e.target === contatoModal) {
            contatoModal.style.display = 'none';
        }
        if (e.target === animalModal) {
            animalModal.style.display = 'none';
        }
    });

    // Handle contact form submission
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Simple validation
            if (!nome || !email || !telefone || !assunto || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Form handling logic would go here
            // For now, just display success message and close modal
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contatoModal.style.display = 'none';
            contatoForm.reset();
        });
    }
}); 