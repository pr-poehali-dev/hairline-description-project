import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-fade-in">
            ДОРОЖКА СОКРОВИЩ
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-red-400 font-semibold">
            Самое отвратительное украшение мужского тела
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Исследование того, как тонкая полоска волос превращает
            привлекательного мужчину в пещерного человека
          </p>

          {/* Image with dramatic overlay */}
          <div className="relative max-w-md mx-auto mb-8">
            <img
              src="https://cdn.poehali.dev/files/f326f507-9156-432c-97fd-7593211817ed.jpg"
              alt="Пример ужасной дорожки сокровищ"
              className="rounded-lg shadow-2xl border-4 border-red-500/50"
            />
            <div className="absolute inset-0 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl bg-red-600/80 px-4 py-2 rounded-full">
                ⚠️ ОСТОРОЖНО
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold"
            >
              <Icon name="AlertTriangle" size={20} />
              Узнать всю правду
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-red-500 text-red-400 hover:bg-red-500/10"
            >
              <Icon name="Eye" size={20} />
              Посмотреть статистику
            </Button>
          </div>
        </div>
      </section>

      {/* Horror Stories Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-400">
            🔥 УЖАСЫ ДОРОЖКИ СОКРОВИЩ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="Frown" size={24} />
                  Эстетический кошмар
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Превращает стройный торс в карту сокровищ пирата. Словно
                  кто-то нарисовал стрелку, указывающую вниз с подписью "здесь
                  был неандерталец".
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="X" size={24} />
                  Женское отвращение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  73% женщин сравнивают дорожку сокровищ с "тропинкой к
                  разочарованию". Остальные 27% просто молчат из вежливости.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="Zap" size={24} />
                  Эволюционная ошибка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Природа явно ошиблась, создав эту "декорацию". Как будто
                  эволюция решила подшутить над современными мужчинами.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="Users" size={24} />
                  Социальная изоляция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  На пляже такие мужчины становятся объектом скрытых насмешек.
                  Дети показывают пальцем, взрослые отворачиваются.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="TrendingDown" size={24} />
                  Снижение самооценки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Мужчины с дорожкой сокровищ на 40% чаще избегают снимать
                  рубашку в общественных местах. Это научный факт*.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover-scale">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} />
                  Модный провал
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Ни один модный дизайнер никогда не создавал одежду, чтобы
                  подчеркнуть дорожку сокровищ. Это говорит само за себя.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-orange-400">
            📊 ПУГАЮЩАЯ СТАТИСТИКА
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-orange-500/30">
              <div className="text-3xl font-bold text-red-500 mb-2">89%</div>
              <p className="text-gray-300">мужчин имеют эту "особенность"</p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-orange-500/30">
              <div className="text-3xl font-bold text-red-500 mb-2">-35%</div>
              <p className="text-gray-300">
                привлекательности по мнению экспертов*
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-orange-500/30">
              <div className="text-3xl font-bold text-red-500 mb-2">73%</div>
              <p className="text-gray-300">женщин предпочитают гладкий торс</p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-orange-500/30">
              <div className="text-3xl font-bold text-red-500 mb-2">0</div>
              <p className="text-gray-300">преимуществ найдено наукой</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            * Данные основаны на субъективных исследованиях и могут не отражать
            реальность
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            ПОРА ДЕЙСТВОВАТЬ!
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Не позволяйте дорожке сокровищ портить ваш образ. Современные
            решения доступны каждому!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold"
            >
              <Icon name="Scissors" size={20} />
              Найти решение
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="MessageCircle" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Исследовательский центр эстетических катастроф
          </p>
          <p className="text-sm text-gray-500">
            Данный сайт создан в сатирических целях. Все мнения субъективны и не
            претендуют на научность. Любите себя такими, какие вы есть! 💙
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
