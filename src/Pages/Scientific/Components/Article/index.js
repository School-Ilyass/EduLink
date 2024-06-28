import './index.css'
import {useState} from "react"
import Logo from '../../../../Assets/Logo/Big.svg'

function Article(){
    const [ArticleInfo , setArticleInfo] = useState()
    function GetArticleInfo(id){
        // alert(ArticleINFO[id - 1])
        setArticleInfo(ArticleINFO[id - 1])
    }
    const Article = 
    [
        {
            "ID" : 1,
            "IMG" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DOV5tmh_MgjvAjtnCwz_diJEX-bFCTpknQ&s"
        },
        {
            "ID" : 2,
            "IMG" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERUSExIWFRUXGBgbFxcVFRgYHRYZFRgYGBUbGhkZHigsGxooGxUVITEhJzUrLi4uGCAzODU4NygtLysBCgoKDQ0OFxAQFy0dHx4vLS0wLSstLS0tLS0tLy4tLS0tLS0tKy0rLS0rLS8tLTUtLy0tLS0tKystLS0tLS04Lf/AABEIAQEAxAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAACAQMDAgUCBAMFBAoDAAABAgMABBEFEiETMQYiQVFhB3EUMoGRI0JSFTOhscFicrLwJDZDc3SCksPh8QgWNf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAAIBBQEBAAAAAAAAAAAAAQIRMQMSISJBUTL/2gAMAwEAAhEDEQA/AO40pSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgVyDx9fzXOtxaY189jb9MOGjYoZXYHA3ZHcjaAeMqfUiuv1TvHGl6VesLW9kiWYJujJkEciK2RlSe4yDwcjjOKDxpFg+j2dzLc3s12ikMpkDM0a8KFA3EnzHnGB8CoP6W/UsXgWC6ZjdSSPt2xERhQu4DcOBwrd8mtP6T6lKJtQ0/8Sbu3tx/BlJ3YB3DaG5yCPTtlTitv/wDH67j/ALL2713CeQYJGckIRx8g0Epe/VzTYzIu6ZniZlZEiJI2Ehm9BtGO+a29d+pFpasiSJcFnjSXakJJRJM7S+SMHytx8Gq39FLdfxGrPtG78Uy5xzt3SHH2zXi71y+v9Tu7SC+j0+G1wC3TR3lIOCfMR5QQ3YgAEd80FtuvHlqdNl1CCTfGoKjCMSshwFV04I5Zc/Bz2qC+lf1FF7HHBcMzXbGViRFtQKpJUBhxwuB71WvpE/8A0TWoxIJQpchlAAfcko3hR2DbQcCrB9Gbkf2GqRuvVBuAo3DIcszKMe+CDQePqT4zsZQ1j+KmULIv4k2sRkwqHLIZNwCcjkjdjBGO9XC08TWCaet3HMi2iKAGGfKF8oXb335wNvfNcf8ApNDfNayi0v7WAiRutHPEDJnAGWLDJXH6ZB9c171/wQ1toVyzXsDo1xHcR9HIjc4aMouBjneMAceQfoF7h+sOnu6IqXJaR0VB0Dlg5xvXnlR+/sDWK21mKfxAFjvrgNHG8bWhjYRs0e7c24nGOc9s5Uc44qrXU91rFzpqfg1tFt2WRpGkTOPI2IhwcYThRnkjOMVYLv8A63Q/+DP/ALlBYvEn1HsbOY27tJJMBlo4IzIUB/q7Adxx35Fb1j41sZbN75LgdCPPUYggoRjysmM7uRgeuRjvXH/p5Ffm5vxb3ttbz9d+ss8YaR8M2SCR+Xdu49/vVl0PwEv4fUmvL6B4LvBkktyESKSGRmZz/KNrjkfBBoLX4b+pFlezrbxCcO4YoXhZVcIMsQwzgY98dwO5q41yDw7rN7pl9aaXcSwXdtKNlvLGAJI1A2pkD04xg54/m4xXX6BSlKBSlKBSlKBSlKBSlKBVa8R+AtPvpBLc24eQDG8O6EgdgdjDP61Za+E45NBG6B4ftrKPpWsKxJnJC5JY+7Mclj8kmom2+nemx3QvEtgkwbeCryBQx9QgbaO/bGK0dT8WzJrlrpyCMwSwmR2wSxP8bAU5wBmIeh9auruB3IH3OKCM0Tw7bWhla3j2GZy8nndtznOT5icdzwMCozXvp7pt5N17i1VpDjLB3TdjgbgjDccADJ54q0UJoITQ/CdnZySyW0AiMoUSBS20hc7cITtHc9h6mtDTPp3ptvci7hthHMpYqVkk2qWBU4TdtAwxGMYHpVoDjOMjI9M819zQVPWfprpd1KZprRTIxyxR5I9xPJJCMAST3Pc148WaAselNaWdhHOoxst2bauN25m3Fgd3c9wST3q35qleGPFs1xqeoWsgjWK1KhCAQTuJBLMTz29MUHL5/B012YYrTRH010kVnuZJpDtAz+XefNzhgRk+Ue9dw/8A122N2t6Y83Kp0xJuf8vPG3O31POM81Kk8ZqkfTfxbcX9pczyIheOeRI0jyoIREZQSxPJLYzQSPiH6fadeyda4tVaT1dWeMtgADdsYbjgAZOTgVt2vhGyjtGskt1Fu/5o8sdxODksTkngc5zwK+eDNTubi1Et3bfhpdzDp5/lB8rYPIz8+2fWpvqDOMjPtnn9qCs+H/p7p1lL1re1CyDOHZ3crkYO3ex2nBIyOcGrRXl5AO5A+5xWvqd8sEMk752RoztgZOFBJwPU4FBtUqI8KeII760ju41ZEk37VfG4BHZOcEjnbn9a1PDOr3c092lxadCOKTbA+7PWXLc/sFORx5sdwaCxUryZBnGRn2zz+1eqBSvKuCSARkdxntXqgUpSgUpSgVyfxmj6lrkWlSSulpHD1ZERtpmOM4J9uVHwN3qeOsVRfGvgWW4u4tQsrn8Ndxrt3FdyuvOMj3wzDscg/FBTrfw5b2HiizhtlZYzbs+1nZ8ErcKcFuceQHHuTVatdWi1G4ubjULTULwdQrClsrGOBR2HlYYfBHH6nOa6XpXga+/tSHUry9imaNChRIdmFKuAqkHkZctk88n4rwPAV7aXM0ul3yQxTtveCaPeqscklTz7nHbjAOcUGv8ARS6uf+lW8sdytvGym1N0jK4Ry/kJPBwFXtwCT71u/XhiNHkIOP4kXb/fq2+GLG5htwl3ci5l3MTIECcMcgYHtn44wMcVUfr1/wDx5P8AvIv+OgqvjXwRBZaYmp2kk0V1GIXMnWYmQuUU5ye/mzxgcYra8Rak1xf+HZ24Mqh2A4GW6RPHtkmt1vAupX8EEN5qKG0CxsUhhCu4CgqGPuP1Hrjip7xx4Da6FpJaTC2ms/7kldy7QFwCPjYvv6gjngIb6mMf7a0Xn/tW/wCOKoPRPCdtqGuasl0rOqOpCq7IMsTydpGcY4+5qxN9P9QmvrS9u9QjlaBw3TWHYqqCCQmDyTg5J+Pavr+BtRivru9s72GI3L8o8RcbfQlj2YHPAGKDR+m00lpq9/pAleW3ij6sXUbJj/uvKPgiYZ9MpnHJqO+l+lx3Oi6jFLu2/iZW8rFTmOOJ15Hyoq9eBfBP4Jp7iec3N3cHMspXaMd9qj0Gf8hwMVq+BfBE1jDeQNOkkc7u0eEYFS67SWOfYLwPbvQc703xHNZ+FVeFisklw8Ycd0DMxYg+hwpAPpmrzov0lsoxBMzzNcoY5HmErAyMpDMCMkbCeOOcevrWTS/poo0c6XcShvOzrJGMbWLblIB747EeoJrxpfhjW4+lC2qxGGJk56GZHRCMIxPoQME5z8mgr31Aawu9RkiTT7q/uo0VZOjKY44sZ/mH8/m5yMcAd81G+EQbrQdStrkyMLV5DGHbzJsQsqEjuAynjtyfSrhc+BL6G+ubrT76OFbo5lWWIOVbk5X3wSxHb82Dms3gz6eSWkd9BNciaK7H5gpV8srB2PJGTu+e1BEfRbwfbHT4b3D9aWOeNz1G27TK6HC9gcIOagvA12bBfEDQ5P4ZmWEOS2Om86x5z3xgZ98VdvAHhHUNPKQPexS2cZcqgi2ud+SOT2G8lsZPfvWbw94B6MupmeRZYr93JRQVKq7SkgnPfEo5HqKClaR9PobnR21GaaVr14pJxOZWGxlDMg79vKM+vJxjiorxFrk93oWmSySMJfxmwyKSGOwSKrZ/qxjn3FW5Pp1qcds+nw6ogsm3DzQ5kWNySyZHcHJzyM89gcVKa/8ATVZLGzsraQRrbSrJucEl8BtxOMeYsxNBUfqB4Yh0drK9sXlSU3CpIWkZ+qGBYl8++0ggYHmPFdvqofUjwg+pQwRpKsZimWQllJyFVhjj/eq30ClKUClKUClK5p4q8a3v9qjTLP8ADRMIw3UuywEhIBCpg98HtyTg+1B0ulUjxD4xn07TY57yJGu3bprFCTsaQltuCcnbtXJ++KxaJPr5lha4jshC5HVRC4eJSM+pwWHbjPJ9uaC0L4gtjdmy6y/iAm8x8529+/bOCDjvjmtnVNMhuIzFPEssZIJVxkZHbiudaFqU58RzW9zBaBxC7LNFG3UMeV6QZye+0jPHp7Vji8dahfzTf2YLSO3hYoJbpjmZh6qFPA7H7Ec+gDqMUYVQqjAAAAHoBwBXuuXw/UuZ9Mvpukkd7ZFVkQ5aMlpNgZcHkHD8Z9M5wRWleeM9bjsk1QwWn4UqjGIFzJsfaA27OBknPwCMjg0HWppVVSzMFUdyxAA+5NYdRvo4InmlcJGilmY9gBXGvrhqM1zY2FxGEFrK0UgDZ6gldHZQccbQhIPzVm8TXOrx6TPJcx2EjqxMiYkaNrYRncME5Mm/Hxigu8GuW72wvBMv4coX6hOBtHcnPbsRjvmq9YfU/TJY5ZVuCEh272aORR5zhMZXkkg8d+D7Vzzx1e3Mnhu1eOO3itnResiKykN1QYhGuSNuVyc5r34kuNWttKVri30x7NUhAj2SMcHHT8uQMgnP70HbradZEWRGDI6hlYchlYZUg+xBFZK514j8cSWtvYW9rAkl5dxx9KMeWOMFV5wDwuTgDIGFPPFRt/4v1izvLG1vFs2F3PGu+ESEhC6JIMEjDfxAQeaDq9KpOg+K55tavbBwnRgjVkIUhiSIs7jnBHnPoPSsWm+M5Dq2oWs3TW3tIhIGCndjbGzbjnkeZvT2oL3SuTWHjXV75HurOOzitwzCOO4c9WUJ37MACe3oM+vrV0+n/ixdSs1uAuxgxSRM52uuCcH1BDKR96Cy0pSgUpSgUpSgUpSgVyz6rXVk8ht7vTbuYiMGK5t4skM2cqHyOB5TjzDk8e/U6UHBm8L6pNoVs8kbvcW1yZYonz1DBtXAIPO4MCQp528ewq+aN9SxcSxQDTr5ZHYLIXhwkWfzMWznaD7gcftV9pQczhsZD4plkMb9I2m3qbW25wnG7GM9653YeF7Wwkmt9U0u6ucOTDPbdQq6dgMK6j0z6nzYI4r9IUoOPXXh+2XQL2SysJ7Z7gIDDJ1WkYRTDYQrEnBDFuPf4qW1azkPhVYhG5k/CQjphG3ZBTI24znvxXS6UHF/HOi3MnhvTxHC7PAIHeMKxcARMh8gGeCwz7DJ9Ks2reJRqWkX/RtbmMrCyhZotrOzKeECk7sYroVKDjPiDTpj4TghEMhlAizGEYuMSEnK4zU99U7OSTQBGkbu+228iqWbgpnygZ4rpFKDj3ivTLmCTSdVit3nFtBGk0SA71XZyduM9pHHwQM1DeL/ABYl/qujslvcwiO6QZuIhHvLTQflwxzjbz9xXeqqPjDwYb27sLnr9P8AByiTbs3dTDxvjO4bf7vGee9BTLy9l0vxBd3ctpcTQXMSiNrePqcgRcckDOY2GM57e9a3hiwnvtS1Zpbaa1W7tSidZGXG5Y1XJxjdjBI9OR6V2qlB+btG0WytUNvqejXsl0jMBJB1GSUE+UgiRR64yuQQM9+K7d4B0e3t7NPw9s9ssuJXikZyyOyqGDbzkEbQPTt2qx0oFKUoFKUoFKUoFKUoFKVVofEkp1BrUIjIsvTO0PvjX8OJuq5wV2FiI8cHLDv2oLTSq9r+vvby9LapMkYNvnPnl6ixurY/lHVhbjnAc+lYR4tV2iWJT/EAfMi43RPDPJFImD2ZoDweQO4GRQWelVZfG0CRqZsq/wCG67Bdp4EJmcBdxYeVXxkAHGM191jxescMxSKQzxxzt0mUZXoRo5Z8NjZ/Fi7Enz8DIOAtFKruoeKo45EUFXTMizsrA/h2jEZ849B/EGfYEHsDWtH4zj6SblxO9sJ9ilSMmIykbd24DAbkgA7SAc0FrpUdo1+0wkJAG2QqMZ5AVSCc+vmNSNApSlApSlApSlApSlApSlApSlApSlApSlArSOlRZc4Yb5Elba7rl4wgU8HtiNAV7HHI5NbtKDWurCORo3dAzRMXjJ/lYoyE/wDpdh+tR9r4WtYyCkZBUrtJkkO0RhwiLlvLEBJIBGPLhyMc1M0oK+3gyzKlDG5UoUKmaYggwm3Jxv8AzdE7N3fAHPArPqXhe2nLmRGy+/eUlkjLCRESRSUYZQrHHlexKg4yM1M0oNaaxjZldlyVVlGc42yYDgjsc7R3qMTwnaDtGyjaF2rLIFwIehnYGxu6WE3YzgD2FTlKDVsrBIi5QEb2DMNzEZCquQCcLwozjGTz3JrapSgUpSgUpSgUrDJPhguDz7fHfjv6jtWUGg+0pSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg+E1r/AIk5xtxwTjPJA9gM5+1erxcqQPXj/wC/io8sTl8nLeVPkcc5x6/6/rVjOV0lUYEZHIr63xWK0cFfKcgEjJzyVOD3+QazVGkG+7djOGPbn8ig5JY+55b9B6VKWoxn29iMc+pHwe/71GXCqqPkhy3J3Y5UkAA7iBnJJ7jsK3tKiITkYJJ9CPgcFm9vQ4q/HKX202ZnwCeP17fr8VrW98C5TcOCe/B4JH69q9ahjbtZchjj5+MfNaaoCMOoc7goJ7MP6gft7cUbt8pelfBX2o0UpSgUpSgUpSgUpSgUpSgUpSgUpSgUpSg8TJlSPcYqNkbAL9lRfL68kct7E1K1Xr8YxIpxgkebtgksAe47Mw5GOe4qxnLXKZsFAjABzj19/X/Ws5Naul/3YB9O3yP5f8MD9K2XIAJPb1qNIOZwV4ySxySFbIVQNoAQ8cMB69zwambVMIo+Pcnn15PzUAwBZVbHOGw3T7vlmADDP5QPynI9qsEA8o+w71bw5YecrWtqMg8qFlUt+XJxkgjsPXv/AJe9LZNzlscLwM/1fzHHpUf4oGQnAY5ICnp+bODgdTv27DmpLT+V3Hg8DGCNoA4XkDnnn/4qOlx+tulK+E0V9pWAXQyBzz2OMg/t/n2rPQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKi72EbinOWBK4HAPHz7r/jUpWjfHa6v2AB3MTwoHPPNWM5cPOiybk5xkcHAwOB7Y4Pbjn7nvW3cvhGPspP7D5rR0mIgs24FWCnAOeSA2cY8vc8cg9+OcyTDios4QzDlmDcbGIwSeAAuPzYIyQQcA/6zI7Vo29lg9gozztABcjtuI9K36tTCaV7XDxnIGJRnyk48mT6HjAU5+/6TluBt4+c855JJbn75rS1DSeoCN5UMQeM5BG7kEEf1f4CpFVwMVG/j7WC5nC4GQO5OewUDkn4rM7ADJ4AqF1CQkkDkkgFQSGA7pgjtyM5IIJwDVkc88u2FgW6hCnIyTnHYfy5xwwI5DLj29Cam61dPh2rj3JJIGMnsTgcDt6ff1rapTpyyeSlKVGylKUClKUClKUClKUCla19OVUBSAzHC7s4yftUemqMVJPlZM9RWx5cDkgAEkZoJmlYbecOMj/n/nt8HIrNQKj9WYgDCg98kuyn0wBtUknPP6CpCtDWZAseWKAdvOCRluB2I9zVnLHU/mtOxnEOeocZxzuaTso25O0bRj0A+fepZ51AB7g/0gn/ACqvwyKsbEPHjJy4yDwuTgszbmwO+fKKG4w7dKLPA8uGUNnvuXIGCGUBjxlXPpS8p07JjE6t2MZw36qRXlb+MkgHJHfAPz2Pr2Pb496g4VD7W6u4MocMjExtsyNyOBgDs2wZPkU+9R76iCm+MNHEhTrSKq56cgGHjcFgCpRN6nzBcHjjJuTKrlFMrDKkH/T7+1ZKgnjlDlhiTlmBYHhT2CNjA7nuccDjmtqyv3OQ8ZAHZsjB7Dvxk5z2+KisupykBRlgCeSgBYccEAg55x2Gf0zWrp9pk5bccZwWGAd3qoPKk8ZHbjgc1v3EQkAxgjPJ57euMetZo4wowoAHxV2xcN3b3SlKjZSlKBSlKBSlKBSlKBSlKDDcwhgOASDkZ9D7/wCJqHlAEmX3pgkbgfzL6BjnuSpII7DI4xmp6sE8APPrRLv4hlcRSKVx0yVxny7M8enpjHuDgexYzyMCAR2IyP1qFaIIDvyqf0nkE5G3Hfkcn09+e53NJO1QhcOOdh55A4wSe545qkSFamqf3Tc44HIBb1GOFIJ+1bdYroDY2e2Oe3+vFQs3NIi1ZpMkjcd2QShix5SCdpYlh5mz+1aL37rKqQmPY7GNCQQsM0eWZJAh8wYDy/I+RnRkZ5XeFyqlpQktunBKSDMVzFJgNuHDk9htcYyuT9khIDPcBZi7QpKsSkRuyvthuMuBh94UEKSFAHJ25rRjj2T2rxb20knKxiJtzyxsSCltcxuY7mMscFopPP2GSGkPHGJexs4oiETK8MFV5fyKWXqLCueBuKfbygcYFYw/mlBCIsSggBTIxRl3KYxwEOY5BjByR+hwW6ySMJQN5hk3RuWyGhlXDoJSACyvz/5VHzTSZdTfDM1xEgbLHIJIG6TlTJ01bceCASCzDOM/v8huXG0kIu5pYMklwHBZoW3n8ylgR2HLAelZbbTNiuhdArBxyuGAfJ2mQnLIu7jAXjb85aZCAwBk3Sbcbd7yAsndwWAC4OV8oA7j4DwxbleWfw0XIJcSglV3pIrBY3HDAFyd5PqV8vl478ztamn8hmzkEnHft+9bdSt4cFKUqNFKUoFKUoFKUoFKUoFKUoFKUoPLxg9wD96g5YXhY7fNFwwT1XHqM9gCAM+gPNT1YLyEshAOGwdp9iRQ0xRalESF3hXIzsYgMBjOSvpxz9q131aJ2VI5FfduOVdDjp7CwIzns69gcZGe4qHutIaYyMG6aTxsr7NzBmMYjUshOA6kEFlwWUBT2FetR0l5tvUdELRzxts35zNGqqRv7n+GfbjA9M0X1/WRpIBIk/VQYV493XQK4wHKtxztALADtuJ7Gtad7ZWlVpVCGB5DEk7bZI5MsrLvYLGRscgrgc5yBWNYAkkWcM8coll6YnlAAgaNSztna2HDAd8AYB714g0RxA1uroSLT8O5CvgHZIY2QDuuJDkfAxVS443mt+K+jWdkHmkURxl2kTfmUhkBB7jz7vLjngA1glIbcktwpwrmRN4OxQJFOd7DAHWGSQfyJmvTWZZmIdMmW2fady4EPTLAhgOSYgAf9qo99GkEkcLH+Gba/jWUI3BuJLdl6hPG84bjPm2E+uAWY4pS6t4hvyykZxIwdE2F1bKE84BExIGc4YY963oVXZ1MKcFmTa7NhpSzFs9ud+QRxg8cVDXunOu6WSVA4ZZwimUErFB0JB5PNgbgdy57gY95Cwdci3SMbI9qM6E4U7FkXh85U7wByW57YOaM5SSeKnLNMIo+P86z18Ar7UJNQpSlFKUpQKUpQKUqKutZIaRIYHnaLHU6ZjXaxAbYC7DL7WU47YIyRkUErSoOy8UwSxLLH1CGOCNjBkYNsZHB/K6kNkf7PyM7Q1qL/b74/u3+Pj5oJKleIZAyhh2YAjII4IyOD2r3QKUpQKUpQReqWBbBVA64kDJnHL4IdSezBl+PzE/eNVFVlMjPzj0Aw4ZXwzAnnerED0EjZ71Zqj7rTycmNsZ7o3mRvuPT7irtnslu6g9VhZQd0jBZnY7SwSPAVQqnYpdjtAARD5tp5GTUjJLhml6Z2NGhAfyY5ACkN+XGckHt7ZrxFaMVaLLrwMKeQD3O2RSCFIBBxgjdWla2hliKY6SkqyNgxBNpV02RE7iA8aE7tmdzYot8MmoaiuJOkuViCSsSVZJYjlXAzkjAEnYd0574rFcSyszqu1ZCGhcxrwCymW2lLDzKnmdTzgGQ4rLcdKNgHUsVBAaFcBuqGkZOmG8wxGW82efvWSO+jwyhggHlEbjKlUbpjgKAuSOAD7Gqzq1htrBhIw2GAZE0e3ayqzKYpo842gNhWA9yT6VuaLZxKyhYlPTQKkhDFtq5VV3sozgEjIJ4+9fIixTC4ZSSNm5WKk/0t+/DfIqUs7XZkkrk4/KmwcfGTz8/aptO27mm1SlKjoUpSgUpSgUpSgVVrOG4tLm5xA9xb3EnWVoim+JyirIjq7LlTsBUrnvgj1q00oOaabYOztdRQyOLj8b1oRtRoZJxbdFZFkK9lgYk84aQ4yDmvL6NeN0Ga1lHR6Ik/iQvJKv4VY329SVkwsvJiI25Qvks2K6bSg0tGtunbxR+fyooHVYM+AMDey8FvfHFbtKUClKUClKUClKUHzaM59a+FB3wM/avVKDy8YIwQCPkZ7dq1zp8X9AH5TxkcowZeB7EA1tUoItNCiDq4B8pJA453Mrc8Z4ZQQe/epSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKD//2Q=="
        }
    ]
    

    const ArticleINFO = 
    [
        {
            "ID" : 1,
            "Name" : "Simulation of watchdog in bluetooth mesh",
            "Rating" : 7,
            "Impact" : 6,
        },

        {
            "ID" : 2,
            "Name" : "Mesh Wifi",
            "Rating" : 8,
            "Impact" : 9,
        }
    ]

    return(
        <div className="Article">
            <div className="ArticleContainer">
                <div>
                    <h1>Article</h1>
                </div>

                <div className="ArticleContainerBody">
                    <div className="ShowMyArticles">
                        
                        {
                            Article.map((article)=>(
                                // <a href="#">{article.ID}</a>
                                <div>
                                        <img 
                                            src={article.IMG}
                                            onClick={()=>{GetArticleInfo(article.ID)}}
                                         /> 
                                </div>
                                ))
                                
                        }
                    </div>
                    <div className="ShowMyArticlesInfos">
                        {ArticleInfo &&(
                            <>  
                                <div  className="ArticleInfoTitle">
                                    <p>{ArticleInfo.Name}</p>
                                </div>
                                
                                <div className="ArticleInfoRatings">
                                    {/* <p>Rating : </p> */}
                                    <div>
                                        <h1>{ArticleInfo.Impact}</h1>
                                        <p>Impact</p>
                                    </div>
                                    <div>
                                        <h1>{ArticleInfo.Rating}</h1>
                                        <p>Impact</p>
                                    </div>
                                </div>

                                {/* <div>
                                    <p>Del</p>
                                    <p>Mod</p>
                                </div> */}
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Article