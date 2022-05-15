const cron = require("node-cron");
const bot3 = new Telegraf("5315774518:AAEn7ZegEpSdf9f29N0LUsepd1MNoBhEfRI", {
  channelMode: true
});

bot3.command("photo", (ctx) => {
  ctx.replyWithDocument(`https://www.chuguev.net/video/shot/camera1.jpg`);
});

cron.schedule("*/3 * * * *", () => {
  console.log("running a task every minute");
  send();
});

function send() {
  bot3.telegram
    .sendMediaGroup("-1001629836197", [
      {
        type: "document",
        caption:
          "#camera1 " +
          new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
        media: {
          url: "https://www.chuguev.net/video/shot/camera1.jpg",
          filename: "camera1.png"
        }
      },
      {
        type: "document",
        caption:
          "#camera9 " +
          new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
        media: {
          url: "https://www.chuguev.net/video/shot/camera9.jpg",
          filename: "camera9.png"
        }
      },
      {
        type: "document",
        caption:
          "#camera10 " +
          new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
        media: {
          url: "https://www.chuguev.net/video/shot/camera10.jpg",
          filename: "camera10.png"
        }
      },
      {
        type: "document",
        caption:
          "#camera12 " +
          new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
        media: {
          url: "https://www.chuguev.net/video/shot/camera12.jpg",
          filename: "camera12.png"
        }
      }
    ])
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
// bot.on("message", (ctx) => console.log(ctx.chat.id));
// bot.use((ctx) => {
//   console.log(ctx.update.channel_post.chat);
// });

bot3.launch(console.log(new Date(), "[Telegraf3] = Bot Started"));
