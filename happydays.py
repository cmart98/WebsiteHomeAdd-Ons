from selenium import webdriver
from GoogleNews import GoogleNews
from newspaper import Article
import pandas as pd
from datetime import date

from afinn import Afinn
af = Afinn()

PATH = "C:\Program Files (x86)\chromedriver_win32\chromedriver.exe"
#driver = webdriver.Chrome(PATH)
print(date.today().strftime('%m/%d/%Y'))
googlenews=GoogleNews(start= str(date.today().strftime('%m/%d/%Y')),end=str(date.today().strftime('%m/%d/%Y')))
#topic = input('what topic would u like to know about')
googlenews.search('Covid')
#googlenews.get_page(2)
a = googlenews.results()

newList = []
links = []
for i in a:
    newList.append(i['title'])
    links.append(i['link'])
for x in range(len(newList)):
    print(newList[x])
    print(links[x])
    score = af.score(newList[x]) 
    if score > 0:
        print('positive')
    elif score == 0:
        print('neutral')
    else:
        print('negative')

k=input("press close to exit") 

# for i in range(2,20):
#     googlenews.getpage(i)
#     result=googlenews.result()
#     df=pd.DataFrame(result)

# for ind in df.index:
#     dict={}
#     article = Article(df['link'][ind],config=config)
#     article.download()
#     article.parse()
#     article.nlp()
#     dict['Date']=df['date'][ind]
#     dict['Media']=df['media'][ind]
#     dict['Title']=article.title
#     dict['Article']=article.text
#     dict['Summary']=article.summary
#     list.append(dict)
# news_df=pd.DataFrame(list)
# news_df.to_excel("articles.xlsx")

#driver.get('http://www.cnn.com')

#for headline in driver.find_elements_by_class_name('cd__headline-text'):
#    print(headline.text)

#driver.get("https://abcnews.go.com/")
#headline_card = driver.find_element_by_xpath('/html/body/div[4]/section/section/div[1]/div/article[2]/figcaption/div/h1')
#headline_card_a = headline_card.find_element_by_tag_name('a')
#headline_card_a_href = headline_card_a.get_attribute('href')
#headline_card_headline = driver.find_element_by_tag_name('h1').text
#headline_article = Article(headline_card_a_href, headline_card_headline, 1)
#articles = [headline_article]
#print(headline_card)