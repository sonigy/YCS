[![YCS - logo](images/logo-ycs-128.png)](https://chrome.google.com/webstore/detail/pmfhcilikeembgbiadjiojgfgcfbcoaa)

# YCS - YouTube Comment Search

[<img src="images/YCS%20-%201280%20x%20640.jpg" alt="YouTube Comment Search" width="1280"/>](https://chrome.google.com/webstore/detail/pmfhcilikeembgbiadjiojgfgcfbcoaa)

### Search comments, replies, chat replay, video transcript for the current video on YouTube by contents, authors, time.
## Features
✅ Quick search by timestamp, author, content<br>
✅ Export comments, replies, chat replay, video transcript<br>
✅ Flexible (fuzzy) search<br>
✅ Multilingual search<br>
✅ Search by Emoji<br>
✅ Works in incognito mode<br>
✅ Unlimited load comments<br>
✅ Time stamps - show comments, replies with time stamps<br>
✅ Author - show comments, replies and chat comments from the author<br>
✅ Likes - show comments, replies by number of likes<br>
✅ Replied - show comments by number of replies<br>
✅ Members - show comments, replies and chat comments from channel members<br>
✅ Donated - show chat comments from users who have donated<br>
✅ Small size, low use CPU and memory

## Instructions

1) Open video on YouTube
2) Find the YCS extension under the current video and click the button "Load all" or choose to load the categories
3) Write the search query, press Enter or click the button Search

## Extended Search

[<img src="images/ycs-ext-search.png" alt="YCS. Extended search"/>](https://chrome.google.com/webstore/detail/pmfhcilikeembgbiadjiojgfgcfbcoaa)

This form of advanced searching allows you to fine-tune results.

White space acts as an **AND** operator, while a single pipe (`|`) character acts as an **OR** operator. To escape white space, use double quote ex. `="scheme language"` for exact match.

| Token       | Match type                 | Description                            |
| ----------- | -------------------------- | -------------------------------------- |
| `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
| `=scheme`   | exact-match                | Items that are `scheme`                |
| `'python`   | include-match              | Items that include `python`            |
| `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
| `^java`     | prefix-exact-match         | Items that start with `java`           |
| `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
| `.js$`      | suffix-exact-match         | Items that end with `.js`              |
| `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |

White space acts as an **AND** operator, while a single pipe (`|`) character acts as an **OR** operator.

## FAQ
1) **How to like, reply to a comment?**<br>
    In the search results, click on the date (like, "2 months ago") of the comment and will open a new window with an active comment or reply under the video, where you can do any action.

2) **How do I find all timestamped comments and replies on a video?**<br>
    Click on the "Time stamps" button under the search bar.

3) **How can I find addressed to user's comments, replies?**<br>
    Write `@` in the input field.

4) **How can I view the contents of the video transcript at a specific minute?**<br>
    You can write a search query for Trp. Video, in the `mm:ss` format. For example:<br>
    `:` - all the text of the video transcript.<br>
    `15:` - all the text in the 15th minute.<br>
And etc.

5) **How can I view the comment for a found reply?**<br>
    Click on the **▼** button.

6) **How can I see the all replies to the found comment?**<br>
    In the header of the found comment, you can find the reply icon and the count, to see the replies click on the **+** button.


## Requirements specification:
Chrome: minimum version 88

## Install
[![Chrome Web Store](images/ChromeWebStore_Badge_v2_206x58.png)](https://chrome.google.com/webstore/detail/pmfhcilikeembgbiadjiojgfgcfbcoaa)\
Install: [YCS - YouTube Comment Search](https://chrome.google.com/webstore/detail/pmfhcilikeembgbiadjiojgfgcfbcoaa)

## Permissions
youtube.com

## Privacy
[Privacy Policy](agreements/Privacy-Policy.txt)

## Author
Was created by [Eugene Gubar](https://github.com/sonigy)

## License
This project is licensed under the MIT [License](LICENSE)
