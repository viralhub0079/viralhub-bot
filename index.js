const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    'Welcome to Viral Hub 🚀',
    Markup.inlineKeyboard([
      Markup.button.webApp(
        '🚀 Open App',
        'https://viralhub0079.github.io/viralhub/'
      )
    ])
  );
});

bot.launch();

console.log('Bot is running...');
