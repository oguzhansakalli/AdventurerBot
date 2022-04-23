const { SlashCommandBuilder } = require("@discordjs/builders");

const islands = [
  { name: "Asura", islandCode: "asura-island" },
  { name: "Drumbeat", islandCode: "drumbeat-island" },
  { name: "Forpe", islandCode: "forpe-island" },
  { name: "Harmony", islandCode: "harmony-island" },
  { name: "Lush Reed", islandCode: "lush-reed-island" },
  { name: "Medeia", islandCode: "medeia" },
  { name: "Oblivion", islandCode: "oblivions-valley" },
  { name: "Opportunity", islandCode: "opportunity-isle" },
  { name: "Phantomwing", islandCode: "phantomwing-island" },
  { name: "Snowpang", islandCode: "snowpang-islandowpang" },
  { name: "Tranquil", islandCode: "tranquil-isle" },
  { name: "Volare", islandCode: "volare-island" },
];
const rewards = [
  { reward: "Gold", emojiID: "money_4" },
  { reward: "Card Pack", emojiID: "use_7_140" },
  { reward: "Silver", emojiID: "etc_14" },
  { reward: "Pirate Coin", emojiID: "money_3" },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("adventure")
    .setDescription("Replies with adventure island info!")
    .addStringOption((option) =>
      option
        .setName("island")
        .setDescription("The name of adventure island")
        .setRequired(true)
        .addChoices(
          { name: "Asura", value: "Asura" },
          { name: "Drumbeat", value: "Drumbeat" },
          { name: "Forpe", value: "Forpe" },
          { name: "Harmony", value: "Harmony" },
          { name: "Lagoon", value: "Lagoon" },
          { name: "Lush Reed", value: "Lush Reed" },
          { name: "Medeia", value: "Medeia" },
          { name: "Monte", value: "Monte" },
          { name: "Oblivion", value: "Oblivion" },
          { name: "Opportunity", value: "Opportunity" },
          { name: "Phantomwing", value: "Phantomwing" },
          { name: "Snowpang", value: "Snowpang" },
          { name: "Tranquil", value: "Tranquil Isle" },
          { name: "Volare", value: "Volare" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("reward")
        .setDescription("The reward of adventure island")
        .setRequired(true)
        .addChoices(
          { name: "Gold", value: "Gold" },
          { name: "Card Pack", value: "Card Pack" },
          { name: "Silver", value: "Silver" },
          { name: "Pirate Coin", value: "Pirate Coin" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("event-time")
        .setDescription("The time of event")
        .setRequired(true)
        .addChoices(
          { name: "Weekend-1", value: "11:00-13:00-15:00" },
          { name: "Weekend-2", value: "19:00-21:00-23:00" },
          { name: "Weekday", value: "11:00-13:00-19:00-21:00-23:00" }
        )
    ),
  async execute(interaction) {
    const island = interaction.options.getString("island");
    const reward = interaction.options.getString("reward");
    const time = interaction.options.getString("event-time");
    var selectedRewardEmoji, selectedIslandCode;
    islands.forEach((i) => {
      if (island === i.name) {
        selectedIslandCode = i.islandCode;
      }
    });
    rewards.forEach((r) => {
      if (reward === r.reward) {
        selectedRewardEmoji = r.emojiID;
      }
    });
    await interaction.reply({
      allowedMentions: { roles: ["966659062064357436"] },
      content: `<@&${"966659062064357436"}>`,
      embeds: [
        {
          type: "rich",
          title: `Adventure Island Vote`,
          description: "",
          color: 0x0dc110,
          fields: [
            {
              name: `Island Name`,
              value: `${island}`,
            },
            {
              name: `Reward`,
              value: `${reward}`,
            },
            {
              name: `Event Time`,
              value: `${time}`,
            },
            {
              name: `Island Info(Maxroll.gg)`,
              value: `https://lost-ark.maxroll.gg/island/${selectedIslandCode}`,
            },
          ],
          thumbnail: {
            url: `https://d3planner-assets.maxroll.gg/lost-ark/icons/${selectedRewardEmoji}.png`,
            height: 0,
            width: 0,
          },
        },
      ],
    });
  },
};
