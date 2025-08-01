function initializeLoader() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    const loadingMessages = [
        'Loading components...',
        'Ready!'
    ];

    let messageIndex = 0;

    function addTerminalLine() {
        if (messageIndex >= loadingMessages.length) {
            setTimeout(() => {
                const cursorLine = document.createElement('div');
                cursorLine.className = 'terminal-line';
                cursorLine.innerHTML = `
                    <span class="terminal-prompt">$</span>
                    <span class="terminal-cursor">█</span>
                `;
                terminal.appendChild(cursorLine);

                setTimeout(() => {
                    completeLoading();
                }, 1000);
            }, 300);
            return;
        }

        const message = loadingMessages[messageIndex];
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `
            <span class="terminal-prompt">$</span>
            <span class="terminal-text">${message}</span>
        `;
        terminal.appendChild(line);

        messageIndex++;
        
        setTimeout(addTerminalLine, 500);
    }

    setTimeout(addTerminalLine, 500);
}

function completeLoading() {
    const loader = document.getElementById('portfolioLoader');
    
    if (loader) {
        loader.classList.add('fade-out');

        setTimeout(() => {
            loader.style.display = 'none';
            showPortfolioContent();
        }, 800);
    } else {
        showPortfolioContent();
    }
}

function showPortfolioContent() {
    const content = document.getElementById('portfolioContent');
    if (content) {
        content.style.display = 'block';
        document.body.style.overflow = 'auto';
        initializePortfolio();
    }
}

function initializePortfolio() {
    const content = document.getElementById('portfolioContent');
    if (content) {
        content.style.opacity = '0';
        content.style.transition = 'opacity 1s ease-in-out';

        setTimeout(() => {
            content.style.opacity = '1';
        }, 100);
    }
}

async function initLoader() {
    if (sessionStorage.getItem('portfolioLoaded')) {
        showPortfolioContent();
        return;
    }

    initializeLoader();
}

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('portfolioLoaded', 'true');
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
} else {
    initLoader();
}